
export type QuestionType = {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  relatedComponentId?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  image?: string;
};

export type QuizType = {
  id: string;
  title: string;
  description: string;
  questions: QuestionType[];
  timeLimit?: number; // in minutes
  passingScore: number;
};

export const quizzes: QuizType[] = [
  {
    id: 'basics',
    title: 'أساسيات التكييف والتبريد',
    description: 'اختبار أساسي يغطي المفاهيم الرئيسية في مجال التكييف والتبريد.',
    questions: [
      {
        id: 'q1',
        text: 'ما هو المكون الذي يعتبر "قلب" نظام التكييف؟',
        options: [
          { id: 'q1_a', text: 'المبخر', isCorrect: false },
          { id: 'q1_b', text: 'المكثف', isCorrect: false },
          { id: 'q1_c', text: 'الضاغط (الكمبروسور)', isCorrect: true },
          { id: 'q1_d', text: 'صمام التمدد', isCorrect: false }
        ],
        explanation: 'الضاغط هو قلب نظام التكييف لأنه يضخ وسيط التبريد في الدائرة ويرفع ضغطه ودرجة حرارته، مما يجعل دورة التبريد ممكنة.',
        relatedComponentId: 'compressor',
        difficulty: 'easy'
      },
      {
        id: 'q2',
        text: 'أي من الآتي هو وظيفة المكثف في نظام التكييف؟',
        options: [
          { id: 'q2_a', text: 'امتصاص الحرارة من الغرفة', isCorrect: false },
          { id: 'q2_b', text: 'تحويل غاز التبريد إلى سائل وطرد الحرارة', isCorrect: true },
          { id: 'q2_c', text: 'خفض ضغط وسيط التبريد', isCorrect: false },
          { id: 'q2_d', text: 'تنقية الهواء من الغبار والشوائب', isCorrect: false }
        ],
        explanation: 'وظيفة المكثف هي تبريد غاز التبريد الساخن القادم من الضاغط وتحويله إلى سائل، مما يطلق الحرارة إلى الهواء الخارجي.',
        relatedComponentId: 'condenser',
        difficulty: 'easy'
      },
      {
        id: 'q3',
        text: 'ما هو وسيط التبريد؟',
        options: [
          { id: 'q3_a', text: 'مادة مستخدمة لتزييت الضاغط', isCorrect: false },
          { id: 'q3_b', text: 'مادة تستخدم لمنع التآكل في أنابيب التكييف', isCorrect: false },
          { id: 'q3_c', text: 'مادة تمر عبر دائرة التبريد لنقل الحرارة', isCorrect: true },
          { id: 'q3_d', text: 'مادة تستخدم لتنظيف المكثف', isCorrect: false }
        ],
        explanation: 'وسيط التبريد هو مادة تتدفق عبر دائرة التبريد وتتغير بين الحالة السائلة والغازية، مما يسمح لها بامتصاص الحرارة ونقلها من مكان إلى آخر.',
        relatedComponentId: 'refrigerant',
        difficulty: 'easy'
      },
      {
        id: 'q4',
        text: 'ما هي وظيفة صمام التمدد في نظام التكييف؟',
        options: [
          { id: 'q4_a', text: 'زيادة ضغط وسيط التبريد', isCorrect: false },
          { id: 'q4_b', text: 'خفض ضغط سائل التبريد قبل دخوله المبخر', isCorrect: true },
          { id: 'q4_c', text: 'تكثيف غاز التبريد', isCorrect: false },
          { id: 'q4_d', text: 'تنظيم سرعة دوران الضاغط', isCorrect: false }
        ],
        explanation: 'يقوم صمام التمدد بخفض ضغط سائل التبريد عالي الضغط قبل دخوله إلى المبخر، مما يسمح له بالتمدد والتحول إلى غاز، وبالتالي امتصاص الحرارة من المحيط.',
        relatedComponentId: 'expansion-valve',
        difficulty: 'medium'
      },
      {
        id: 'q5',
        text: 'أين يقع المبخر في نظام التكييف المنزلي من نوع السبليت؟',
        options: [
          { id: 'q5_a', text: 'في الوحدة الداخلية', isCorrect: true },
          { id: 'q5_b', text: 'في الوحدة الخارجية', isCorrect: false },
          { id: 'q5_c', text: 'بين الوحدتين الداخلية والخارجية', isCorrect: false },
          { id: 'q5_d', text: 'خارج النظام بالكامل', isCorrect: false }
        ],
        explanation: 'يقع المبخر في الوحدة الداخلية لتكييف السبليت، حيث يمتص الحرارة من هواء الغرفة مما يؤدي إلى تبريدها.',
        relatedComponentId: 'evaporator',
        difficulty: 'medium'
      }
    ],
    passingScore: 60,
    timeLimit: 10
  },
  {
    id: 'advanced',
    title: 'المستوى المتقدم في التكييف',
    description: 'اختبار متقدم يغطي تفاصيل أكثر تعمقاً في أنظمة التكييف.',
    questions: [
      {
        id: 'adv_q1',
        text: 'ما هو تأثير وجود رطوبة داخل دائرة التبريد؟',
        options: [
          { id: 'adv_q1_a', text: 'تحسين كفاءة التبريد', isCorrect: false },
          { id: 'adv_q1_b', text: 'تكوين حمض وتآكل المكونات المعدنية', isCorrect: true },
          { id: 'adv_q1_c', text: 'زيادة ضغط الدائرة', isCorrect: false },
          { id: 'adv_q1_d', text: 'تقليل استهلاك الكهرباء', isCorrect: false }
        ],
        explanation: 'الرطوبة في دائرة التبريد يمكن أن تتفاعل مع وسيط التبريد لتشكيل أحماض تسبب تآكل المكونات المعدنية، كما يمكن أن تتجمد في صمام التمدد مسببة انسداده.',
        difficulty: 'hard'
      },
      {
        id: 'adv_q2',
        text: 'ما هو مقياس SEER في أنظمة التكييف؟',
        options: [
          { id: 'adv_q2_a', text: 'مقياس لسرعة تدفق الهواء', isCorrect: false },
          { id: 'adv_q2_b', text: 'مقياس لمستوى الضجيج', isCorrect: false },
          { id: 'adv_q2_c', text: 'نسبة كفاءة الطاقة الموسمية', isCorrect: true },
          { id: 'adv_q2_d', text: 'مؤشر مستوى التبريد', isCorrect: false }
        ],
        explanation: 'SEER (Seasonal Energy Efficiency Ratio) هو مقياس لكفاءة استهلاك الطاقة في أنظمة التكييف خلال موسم التبريد بأكمله. كلما ارتفع رقم SEER، كان النظام أكثر كفاءة في استهلاك الطاقة.',
        difficulty: 'hard'
      },
      {
        id: 'adv_q3',
        text: 'ما هي عملية "Superheat" في دورة التبريد؟',
        options: [
          { id: 'adv_q3_a', text: 'تسخين الضاغط لزيادة كفاءته', isCorrect: false },
          { id: 'adv_q3_b', text: 'ارتفاع درجة حرارة البخار عن درجة حرارة التبخر', isCorrect: true },
          { id: 'adv_q3_c', text: 'زيادة درجة حرارة المكثف', isCorrect: false },
          { id: 'adv_q3_d', text: 'عملية تسخين المبخر لإذابة الثلج', isCorrect: false }
        ],
        explanation: '"Superheat" أو السخونة الفائقة هي مقدار ارتفاع درجة حرارة غاز التبريد فوق درجة حرارة التبخر عند مخرج المبخر. وهي مهمة للتأكد من تبخر كل السائل قبل دخول الضاغط.',
        difficulty: 'hard'
      },
      {
        id: 'adv_q4',
        text: 'ما الذي يسبب تكون الثلج على ملف المبخر؟',
        options: [
          { id: 'adv_q4_a', text: 'ارتفاع ضغط الشحن', isCorrect: false },
          { id: 'adv_q4_b', text: 'انخفاض ضغط الشحن', isCorrect: true },
          { id: 'adv_q4_c', text: 'ارتفاع درجة حرارة الغرفة', isCorrect: false },
          { id: 'adv_q4_d', text: 'زيادة سرعة مروحة المبخر', isCorrect: false }
        ],
        explanation: 'انخفاض ضغط الشحن يؤدي إلى انخفاض درجة حرارة المبخر بشكل كبير، مما يتسبب في تجميد الرطوبة الموجودة في الهواء على سطح المبخر وتكون الثلج.',
        relatedComponentId: 'evaporator',
        difficulty: 'hard'
      },
      {
        id: 'adv_q5',
        text: 'ما هي وظيفة المجفف/المرشح (Filter drier) في نظام التكييف؟',
        options: [
          { id: 'adv_q5_a', text: 'تنقية الهواء الداخل للغرفة', isCorrect: false },
          { id: 'adv_q5_b', text: 'إزالة الرطوبة والشوائب من وسيط التبريد', isCorrect: true },
          { id: 'adv_q5_c', text: 'زيادة ضغط وسيط التبريد', isCorrect: false },
          { id: 'adv_q5_d', text: 'تنظيم درجة حرارة الغرفة', isCorrect: false }
        ],
        explanation: 'المجفف/المرشح هو جهاز يركب في خط السائل في نظام التبريد، ويعمل على إزالة الرطوبة والجسيمات الصلبة من وسيط التبريد لمنع تلف المكونات الأخرى.',
        difficulty: 'medium'
      }
    ],
    passingScore: 70,
    timeLimit: 15
  },
  {
    id: 'refrigeration',
    title: 'نظم التبريد والثلاجات',
    description: 'اختبار متخصص في أنظمة التبريد والثلاجات.',
    questions: [
      {
        id: 'ref_q1',
        text: 'ما هو الفرق الرئيسي بين ضاغط التكييف وضاغط الثلاجة؟',
        options: [
          { id: 'ref_q1_a', text: 'لا يوجد فرق، هما متطابقان', isCorrect: false },
          { id: 'ref_q1_b', text: 'ضاغط الثلاجة مصمم للعمل باستمرار وبضغط منخفض', isCorrect: true },
          { id: 'ref_q1_c', text: 'ضاغط التكييف لا يحتوي على زيت تشحيم', isCorrect: false },
          { id: 'ref_q1_d', text: 'ضاغط الثلاجة يستخدم الماء كوسيط تبريد', isCorrect: false }
        ],
        explanation: 'ضاغط الثلاجة مصمم للعمل باستمرار ولفترات طويلة مع ضغوط منخفضة نسبياً، بينما يعمل ضاغط التكييف بشكل متقطع وبضغوط أعلى.',
        relatedComponentId: 'compressor-fridge',
        difficulty: 'medium'
      },
      {
        id: 'ref_q2',
        text: 'ما هي وظيفة الثرموستات في الثلاجة؟',
        options: [
          { id: 'ref_q2_a', text: 'تبريد الطعام مباشرة', isCorrect: false },
          { id: 'ref_q2_b', text: 'التحكم في سرعة المروحة', isCorrect: false },
          { id: 'ref_q2_c', text: 'التحكم في تشغيل وإيقاف الضاغط بناءً على درجة الحرارة', isCorrect: true },
          { id: 'ref_q2_d', text: 'تنظيم تدفق وسيط التبريد', isCorrect: false }
        ],
        explanation: 'الثرموستات في الثلاجة يراقب درجة الحرارة الداخلية ويتحكم في تشغيل وإيقاف الضاغط للحفاظ على درجة الحرارة المطلوبة.',
        relatedComponentId: 'thermostat-fridge',
        difficulty: 'easy'
      },
      {
        id: 'ref_q3',
        text: 'لماذا تحتوي معظم الثلاجات الحديثة على نظام "Frost Free"؟',
        options: [
          { id: 'ref_q3_a', text: 'لتقليل استهلاك الطاقة', isCorrect: false },
          { id: 'ref_q3_b', text: 'لمنع تراكم الثلج على المبخر', isCorrect: true },
          { id: 'ref_q3_c', text: 'لتبريد الطعام بشكل أسرع', isCorrect: false },
          { id: 'ref_q3_d', text: 'لتقليل الضوضاء', isCorrect: false }
        ],
        explanation: 'نظام "Frost Free" يمنع تراكم الثلج على المبخر من خلال دورة إذابة دورية، مما يحافظ على كفاءة التبريد ويلغي الحاجة إلى إذابة الثلج يدوياً.',
        relatedComponentId: 'evaporator-fridge',
        difficulty: 'medium'
      },
      {
        id: 'ref_q4',
        text: 'ما هو نوع الضاغط الأكثر شيوعاً في الثلاجات المنزلية؟',
        options: [
          { id: 'ref_q4_a', text: 'الضاغط الترددي (Reciprocating)', isCorrect: false },
          { id: 'ref_q4_b', text: 'الضاغط اللولبي (Scroll)', isCorrect: false },
          { id: 'ref_q4_c', text: 'الضاغط المحكم (Hermetic)', isCorrect: true },
          { id: 'ref_q4_d', text: 'الضاغط الطرد المركزي (Centrifugal)', isCorrect: false }
        ],
        explanation: 'الضاغط المحكم (Hermetic) هو الأكثر شيوعاً في الثلاجات المنزلية لأنه مغلق بالكامل ولا يحتاج إلى صيانة دورية للتسرب، كما أنه أقل ضوضاء وأكثر كفاءة للاستخدامات الصغيرة.',
        relatedComponentId: 'compressor-fridge',
        difficulty: 'hard'
      },
      {
        id: 'ref_q5',
        text: 'ما سبب تكون قطرات الماء على الجدار الخارجي للثلاجة في بعض الأحيان؟',
        options: [
          { id: 'ref_q5_a', text: 'تسرب من دائرة التبريد', isCorrect: false },
          { id: 'ref_q5_b', text: 'تكثف بخار الماء من الهواء المحيط', isCorrect: true },
          { id: 'ref_q5_c', text: 'ذوبان الثلج من داخل الثلاجة', isCorrect: false },
          { id: 'ref_q5_d', text: 'تسرب من خزان المياه في الثلاجة', isCorrect: false }
        ],
        explanation: 'تتكون قطرات الماء على الجدار الخارجي للثلاجة بسبب تكثف بخار الماء الموجود في الهواء عندما يلامس سطح الثلاجة البارد، خاصة في البيئات ذات الرطوبة العالية.',
        difficulty: 'medium'
      }
    ],
    passingScore: 60,
    timeLimit: 12
  },
  {
    id: 'maintenance',
    title: 'صيانة وإصلاح أعطال أجهزة التكييف',
    description: 'اختبار يركز على صيانة وتشخيص وإصلاح أعطال أجهزة التكييف.',
    questions: [
      {
        id: 'maint_q1',
        text: 'ما هو الإجراء الأول الذي يجب اتخاذه عند فحص جهاز تكييف لا يعمل؟',
        options: [
          { id: 'maint_q1_a', text: 'فحص الضاغط مباشرة', isCorrect: false },
          { id: 'maint_q1_b', text: 'فحص مصدر الطاقة والتوصيلات الكهربائية', isCorrect: true },
          { id: 'maint_q1_c', text: 'إضافة وسيط تبريد إضافي', isCorrect: false },
          { id: 'maint_q1_d', text: 'تنظيف فلتر الهواء', isCorrect: false }
        ],
        explanation: 'الخطوة الأولى في تشخيص أي عطل كهربائي هي التأكد من وجود مصدر طاقة سليم وفحص التوصيلات الكهربائية قبل الانتقال إلى فحص المكونات الأخرى.',
        difficulty: 'easy'
      },
      {
        id: 'maint_q2',
        text: 'ما هو سبب تكون الثلج على الأنابيب الخارجة من الوحدة الداخلية؟',
        options: [
          { id: 'maint_q2_a', text: 'نقص في شحنة وسيط التبريد', isCorrect: true },
          { id: 'maint_q2_b', text: 'زيادة في شحنة وسيط التبريد', isCorrect: false },
          { id: 'maint_q2_c', text: 'ارتفاع درجة حرارة الغرفة', isCorrect: false },
          { id: 'maint_q2_d', text: 'تلف في الثرموستات', isCorrect: false }
        ],
        explanation: 'نقص شحنة وسيط التبريد يؤدي إلى انخفاض ضغط التشغيل وبالتالي انخفاض درجة حرارة وسيط التبريد إلى ما دون نقطة التجمد، مما يتسبب في تكوين الثلج على الأنابيب.',
        difficulty: 'medium'
      },
      {
        id: 'maint_q3',
        text: 'كيف يمكن تحسين كفاءة التكييف وتقليل استهلاك الطاقة؟',
        options: [
          { id: 'maint_q3_a', text: 'ضبط درجة الحرارة على أقل قيمة ممكنة', isCorrect: false },
          { id: 'maint_q3_b', text: 'تشغيل المكيف باستمرار دون إيقاف', isCorrect: false },
          { id: 'maint_q3_c', text: 'تنظيف الفلاتر وصيانة الجهاز بانتظام', isCorrect: true },
          { id: 'maint_q3_d', text: 'تشغيل المكيف فقط في أوقات الذروة', isCorrect: false }
        ],
        explanation: 'تنظيف الفلاتر بانتظام وإجراء الصيانة الدورية يحسن من تدفق الهواء ويقلل من الجهد المطلوب من النظام، مما يؤدي إلى تحسين الكفاءة وتقليل استهلاك الطاقة.',
        difficulty: 'easy'
      },
      {
        id: 'maint_q4',
        text: 'ما هي العلامة التي تشير إلى تسرب وسيط التبريد؟',
        options: [
          { id: 'maint_q4_a', text: 'ارتفاع درجة حرارة الهواء الخارج من المكيف', isCorrect: true },
          { id: 'maint_q4_b', text: 'انخفاض مستوى الضجيج', isCorrect: false },
          { id: 'maint_q4_c', text: 'زيادة في استهلاك الطاقة', isCorrect: false },
          { id: 'maint_q4_d', text: 'تكون قطرات ماء حول الوحدة الخارجية', isCorrect: false }
        ],
        explanation: 'عندما يكون هناك تسرب في وسيط التبريد، تنخفض كفاءة النظام في امتصاص الحرارة، مما يؤدي إلى خروج هواء أقل برودة من المكيف.',
        relatedComponentId: 'refrigerant',
        difficulty: 'medium'
      },
      {
        id: 'maint_q5',
        text: 'ما هي أهمية قياس التيار الكهربائي للضاغط أثناء التشغيل؟',
        options: [
          { id: 'maint_q5_a', text: 'للتأكد من عدم وجود تسرب لوسيط التبريد', isCorrect: false },
          { id: 'maint_q5_b', text: 'للكشف عن أي مشاكل ميكانيكية أو كهربائية في الضاغط', isCorrect: true },
          { id: 'maint_q5_c', text: 'لضبط درجة حرارة التبريد', isCorrect: false },
          { id: 'maint_q5_d', text: 'لتحديد كمية وسيط التبريد اللازمة', isCorrect: false }
        ],
        explanation: 'قياس التيار الكهربائي للضاغط أثناء التشغيل يساعد في الكشف عن المشاكل الميكانيكية مثل الاحتكاك الزائد أو المشاكل الكهربائية مثل تلف الملفات، حيث أن هذه المشاكل تظهر في شكل تغيرات في سحب التيار الكهربائي.',
        relatedComponentId: 'compressor',
        difficulty: 'hard'
      }
    ],
    passingScore: 60,
    timeLimit: 15
  }
];
