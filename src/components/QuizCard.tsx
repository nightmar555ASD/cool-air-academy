
import React, { useState, useEffect } from 'react';
import { QuestionType } from '@/data/quizData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Award, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface QuizCardProps {
  questions: QuestionType[];
  quizTitle: string;
  timeLimit?: number; // in minutes
  passingScore: number;
  onComplete?: (score: number, totalQuestions: number) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  questions,
  quizTitle,
  timeLimit,
  passingScore,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(
    timeLimit ? timeLimit * 60 : null
  );

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLimit && timeRemaining !== null && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(timer);
            completeQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLimit, timeRemaining, quizCompleted]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      // Store the answer
      const newAnswers = new Map(answers);
      newAnswers.set(currentQuestion.id, selectedOption);
      setAnswers(newAnswers);

      // Move to next question or complete quiz
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setShowExplanation(false);
      } else {
        completeQuiz();
      }
    } else {
      toast.warning('الرجاء اختيار إجابة قبل المتابعة');
    }
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const completeQuiz = () => {
    // Calculate score
    let correctAnswers = 0;
    answers.forEach((optionId, questionId) => {
      const question = questions.find((q) => q.id === questionId);
      if (question) {
        const selectedOption = question.options.find((o) => o.id === optionId);
        if (selectedOption && selectedOption.isCorrect) {
          correctAnswers++;
        }
      }
    });

    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);
    setQuizCompleted(true);

    if (onComplete) {
      onComplete(correctAnswers, questions.length);
    }

    if (finalScore >= passingScore) {
      toast.success('أحسنت! لقد اجتزت الاختبار بنجاح');
    } else {
      toast.error('لم تجتز الاختبار. حاول مرة أخرى!');
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers(new Map());
    setShowExplanation(false);
    setQuizCompleted(false);
    setScore(0);
    setTimeRemaining(timeLimit ? timeLimit * 60 : null);
  };

  const isCorrectAnswer = (optionId: string): boolean => {
    return currentQuestion.options.find((o) => o.id === optionId)?.isCorrect || false;
  };

  if (quizCompleted) {
    return (
      <Card className="w-full max-w-3xl mx-auto animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">نتيجة الاختبار: {quizTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <Award
              className={`w-24 h-24 ${
                score >= passingScore ? 'text-hvac-green' : 'text-hvac-red'
              }`}
            />
            <h3 className="text-2xl font-bold">
              درجتك: {score}%
            </h3>
            <p className="text-lg">
              الإجابات الصحيحة: {Math.round((score / 100) * questions.length)} من {questions.length}
            </p>

            <div className="w-full max-w-md">
              <Progress value={score} className="h-4" />
              <div className="flex justify-between mt-1 text-sm">
                <span>0%</span>
                <span className={`${score >= passingScore ? 'text-hvac-green' : 'text-hvac-red'} font-medium`}>
                  {score}%
                </span>
                <span>100%</span>
              </div>
            </div>

            <p className="mt-4 text-lg">
              {score >= passingScore
                ? 'أحسنت! لقد اجتزت هذا الاختبار بنجاح.'
                : 'لم تجتز الاختبار. حاول مرة أخرى!'}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={restartQuiz} className="bg-hvac-blue hover:bg-hvac-blue/90">
            إعادة المحاولة
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{quizTitle}</CardTitle>
          {timeRemaining !== null && (
            <div className="flex items-center text-hvac-red">
              <Clock className="w-4 h-4 mr-1" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">
            سؤال {currentQuestionIndex + 1} من {questions.length}
          </span>
          <span className="text-sm font-medium">
            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <Progress
          value={((currentQuestionIndex + 1) / questions.length) * 100}
          className="h-2"
        />
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{currentQuestion.text}</h3>
            {currentQuestion.image && (
              <div className="mb-4">
                <img
                  src={currentQuestion.image}
                  alt="سؤال"
                  className="rounded-md max-h-60 mx-auto"
                />
              </div>
            )}
            <RadioGroup
              value={selectedOption || ''}
              onValueChange={handleOptionSelect}
              className="space-y-3"
              disabled={showExplanation}
            >
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center space-x-2 rtl:space-x-reverse p-3 rounded-md border ${
                    showExplanation && option.isCorrect
                      ? 'bg-green-50 border-green-200'
                      : showExplanation && selectedOption === option.id && !option.isCorrect
                      ? 'bg-red-50 border-red-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label
                    htmlFor={option.id}
                    className="w-full cursor-pointer py-1 px-2 rounded-md"
                  >
                    {option.text}
                  </Label>
                  {showExplanation && option.isCorrect && (
                    <span className="text-green-600">✓</span>
                  )}
                  {showExplanation && selectedOption === option.id && !option.isCorrect && (
                    <span className="text-red-600">✗</span>
                  )}
                </div>
              ))}
            </RadioGroup>
          </div>

          {showExplanation && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md">
              <h4 className="font-semibold text-hvac-blue mb-2">الشرح:</h4>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        {!showExplanation ? (
          <Button
            onClick={handleCheckAnswer}
            variant="outline"
            disabled={!selectedOption}
          >
            تحقق من الإجابة
          </Button>
        ) : (
          <div></div>
        )}

        <Button
          onClick={handleNextQuestion}
          className="bg-hvac-blue hover:bg-hvac-blue/90"
          disabled={!selectedOption}
        >
          {currentQuestionIndex < questions.length - 1 ? 'التالي' : 'إنهاء الاختبار'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
