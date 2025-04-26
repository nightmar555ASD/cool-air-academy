
import React, { useState } from 'react';
import { quizzes } from '@/data/quizData';
import QuizCard from '@/components/QuizCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Book } from 'lucide-react';
import { toast } from 'sonner';

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  const handleQuizComplete = (quizId: string, score: number, totalQuestions: number) => {
    const quiz = quizzes.find(q => q.id === quizId);
    
    if (quiz && score / totalQuestions * 100 >= quiz.passingScore) {
      if (!earnedBadges.includes(quizId)) {
        setEarnedBadges([...earnedBadges, quizId]);
        toast.success(`لقد حصلت على شارة ${quiz.title}! 🏆`);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">اختبر معرفتك</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            قم بأداء الاختبارات التفاعلية واحصل على شارات التقدم عند اجتياز كل منها.
          </p>
        </div>

        {!selectedQuiz && (
          <div>
            <h2 className="text-2xl font-bold mb-6">اختر اختباراً للبدء</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map((quiz) => (
                <Card key={quiz.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl text-hvac-blue">{quiz.title}</CardTitle>
                      {earnedBadges.includes(quiz.id) && (
                        <Award className="h-6 w-6 text-yellow-500" />
                      )}
                    </div>
                    <CardDescription>{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{quiz.questions.length} أسئلة</span>
                      <span>{quiz.timeLimit ? `${quiz.timeLimit} دقائق` : 'غير محدد بوقت'}</span>
                      <span>درجة النجاح: {quiz.passingScore}%</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['سهل', 'متوسط', 'صعب'].map((level, index) => {
                        const count = quiz.questions.filter(q => 
                          (q.difficulty === 'easy' && index === 0) ||
                          (q.difficulty === 'medium' && index === 1) ||
                          (q.difficulty === 'hard' && index === 2)
                        ).length;
                        
                        if (count === 0) return null;
                        
                        return (
                          <span 
                            key={level} 
                            className={`text-xs px-2 py-1 rounded ${
                              index === 0 ? 'bg-green-100 text-green-800' : 
                              index === 1 ? 'bg-blue-100 text-blue-800' : 
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {level}: {count}
                          </span>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => setSelectedQuiz(quiz.id)} 
                      className="w-full"
                    >
                      ابدأ الاختبار
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {earnedBadges.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">الشارات المكتسبة</h2>
                <div className="flex flex-wrap gap-4">
                  {earnedBadges.map(badgeId => {
                    const quiz = quizzes.find(q => q.id === badgeId);
                    if (!quiz) return null;
                    
                    return (
                      <div key={badgeId} className="text-center">
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-2">
                          <Award className="h-12 w-12 text-yellow-500" />
                        </div>
                        <p className="font-medium text-sm">{quiz.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-12 bg-hvac-gray rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <Book className="h-20 w-20 text-hvac-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">كيف تستعد للاختبارات؟</h2>
                  <p className="text-lg mb-4">
                    للاستعداد الجيد للاختبارات، ننصحك بما يلي:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>استكشف صفحة "اعرف جهازك" لفهم مكونات التكييف بشكل تفاعلي</li>
                    <li>قم بمشاهدة الفيديوهات التعليمية المرتبطة بالمكونات</li>
                    <li>اقرأ الدليل الشامل لكل مكون في قسم "المكونات"</li>
                    <li>راجع الملاحظات والموارد المتاحة في قسم "الموارد"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedQuiz && (
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => setSelectedQuiz(null)} 
              className="mb-6"
            >
              العودة إلى قائمة الاختبارات
            </Button>
            
            <QuizCard 
              questions={quizzes.find(q => q.id === selectedQuiz)?.questions || []}
              quizTitle={quizzes.find(q => q.id === selectedQuiz)?.title || ''}
              timeLimit={quizzes.find(q => q.id === selectedQuiz)?.timeLimit}
              passingScore={quizzes.find(q => q.id === selectedQuiz)?.passingScore || 60}
              onComplete={(score, total) => handleQuizComplete(selectedQuiz, score, total)}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
