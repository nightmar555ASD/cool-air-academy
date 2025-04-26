
// مكونات التكييف ووصفها
export type ComponentType = {
  id: string;
  name: string;
  description: string;
  function: string;
  commonIssues: string[];
  maintenanceTips: string[];
  imageUrl: string;
  position?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  category: 'indoor' | 'outdoor' | 'both' | 'refrigeration';
  relatedVideos?: string[];
};

export const components: ComponentType[] = [
  {
    id: 'compressor',
    name: 'الضاغط (الكمبروسور)',
    description: 'هو قلب نظام التبريد، مسؤول عن ضغط غاز التبريد ورفع ضغطه ودرجة حرارته.',
    function: 'يقوم بضخ وسيط التبريد في الدائرة وتحويله من ضغط منخفض إلى ضغط عالي، مما يساعد على تغيير حالته من غاز إلى سائل.',
    commonIssues: [
      'تلف ملفات المحرك الكهربائي',
      'تسريب زيت التشحيم',
      'ارتفاع في درجة الحرارة',
      'أصوات غير طبيعية أثناء التشغيل'
    ],
    maintenanceTips: [
      'فحص مستوى الزيت بانتظام',
      'التأكد من عدم وجود تسريبات',
      'قياس التيار الكهربائي أثناء التشغيل',
      'فحص أجهزة الحماية الخاصة بالضاغط'
    ],
    imageUrl: '/images/compressor.png',
    position: {
      top: '70%',
      left: '20%',
      width: '15%',
      height: '15%'
    },
    category: 'outdoor',
    relatedVideos: ['compressor-working', 'compressor-maintenance']
  },
  {
    id: 'condenser',
    name: 'المكثف',
    description: 'هو أحد مكونات دائرة التبريد حيث يتم تكثيف غاز التبريد وتحويله إلى سائل.',
    function: 'يقوم بتبريد غاز التبريد الساخن القادم من الضاغط وتحويله إلى سائل، مما يطلق الحرارة إلى الهواء الخارجي.',
    commonIssues: [
      'تراكم الأوساخ والغبار على الزعانف',
      'تلف المروحة',
      'انسداد مسار مرور وسيط التبريد',
      'تسرب في أنابيب المكثف'
    ],
    maintenanceTips: [
      'تنظيف الزعانف بشكل دوري',
      'فحص مروحة المكثف للتأكد من عملها بكفاءة',
      'التأكد من عدم وجود عوائق حول الوحدة الخارجية',
      'فحص الضغط داخل المكثف'
    ],
    imageUrl: '/images/condenser.png',
    position: {
      top: '30%',
      left: '10%',
      width: '20%',
      height: '20%'
    },
    category: 'outdoor',
    relatedVideos: ['condenser-working', 'condenser-cleaning']
  },
  {
    id: 'evaporator',
    name: 'المبخر',
    description: 'المبخر هو الجزء المسؤول عن امتصاص الحرارة من الهواء داخل المكان المراد تبريده.',
    function: 'يقوم بتحويل سائل التبريد إلى غاز، وأثناء هذه العملية يمتص الحرارة من الهواء المحيط مما يؤدي إلى تبريد المكان.',
    commonIssues: [
      'تراكم الثلج على الزعانف',
      'تسريب وسيط التبريد',
      'انسداد مصارف المياه',
      'تلوث الزعانف'
    ],
    maintenanceTips: [
      'تنظيف الزعانف بشكل دوري',
      'فحص مصارف المياه وتنظيفها',
      'فحص التوصيلات للتأكد من عدم وجود تسريبات',
      'تغيير فلاتر الهواء بانتظام'
    ],
    imageUrl: '/images/evaporator.png',
    position: {
      top: '30%',
      left: '70%',
      width: '20%',
      height: '20%'
    },
    category: 'indoor',
    relatedVideos: ['evaporator-function', 'evaporator-cleaning']
  },
  {
    id: 'expansion-valve',
    name: 'صمام التمدد',
    description: 'جهاز يستخدم للتحكم في تدفق سائل التبريد إلى المبخر.',
    function: 'يخفض ضغط سائل التبريد قبل دخوله المبخر، مما يسمح له بالتمدد والتحول إلى غاز، وبالتالي امتصاص الحرارة.',
    commonIssues: [
      'انسداد بسبب الشوائب',
      'تجمد الرطوبة داخله',
      'عطل في آلية التحكم',
      'تكوين الثلج حوله'
    ],
    maintenanceTips: [
      'فحص الصمام للتأكد من عدم وجود انسدادات',
      'التأكد من صحة المعايرة',
      'فحص نظام التبريد للتأكد من خلوه من الرطوبة',
      'قياس درجة السخونة الفائقة عند مخرج المبخر'
    ],
    imageUrl: '/images/expansion-valve.png',
    position: {
      top: '50%',
      left: '50%',
      width: '10%',
      height: '10%'
    },
    category: 'both',
    relatedVideos: ['expansion-valve-working', 'expansion-valve-adjustment']
  },
  {
    id: 'fan',
    name: 'المراوح',
    description: 'توجد مراوح في الوحدة الداخلية والخارجية لتحريك الهواء عبر المبادلات الحرارية.',
    function: 'تقوم بتوزيع الهواء البارد داخل الغرفة (في الوحدة الداخلية) وتبديد الحرارة من المكثف (في الوحدة الخارجية).',
    commonIssues: [
      'تلف محرك المروحة',
      'اهتزاز غير طبيعي',
      'ضجيج عالي أثناء التشغيل',
      'تراكم الأوساخ على شفرات المروحة'
    ],
    maintenanceTips: [
      'تنظيف شفرات المروحة بانتظام',
      'تشحيم المحامل إذا كان ذلك مطلوبًا',
      'فحص التوصيلات الكهربائية',
      'فحص أداء المروحة وسرعة دورانها'
    ],
    imageUrl: '/images/fan.png',
    position: {
      top: '40%',
      left: '80%',
      width: '15%',
      height: '15%'
    },
    category: 'both',
    relatedVideos: ['fan-motor-testing', 'fan-replacement']
  },
  {
    id: 'thermostat',
    name: 'الثرموستات',
    description: 'جهاز تحكم يستخدم لضبط درجة الحرارة في النظام.',
    function: 'يقيس درجة حرارة الهواء ويتحكم في تشغيل وإيقاف نظام التكييف للحفاظ على درجة الحرارة المطلوبة.',
    commonIssues: [
      'قراءات غير دقيقة لدرجة الحرارة',
      'مشاكل في شاشة العرض',
      'فشل في تشغيل أو إيقاف النظام',
      'مشاكل في البطارية'
    ],
    maintenanceTips: [
      'تغيير البطاريات بانتظام',
      'تنظيف الثرموستات من الغبار',
      'التحقق من دقة القراءات بشكل دوري',
      'التأكد من صحة التوصيلات الكهربائية'
    ],
    imageUrl: '/images/thermostat.png',
    position: {
      top: '20%',
      left: '90%',
      width: '10%',
      height: '10%'
    },
    category: 'both',
    relatedVideos: ['thermostat-programming', 'smart-thermostats']
  },
  {
    id: 'refrigerant',
    name: 'وسيط التبريد (الفريون)',
    description: 'المادة المستخدمة في دائرة التبريد لنقل الحرارة من المكان المراد تبريده إلى الخارج.',
    function: 'ينتقل داخل النظام ويتغير بين الحالة السائلة والغازية، مما يسمح له بامتصاص الحرارة ونقلها.',
    commonIssues: [
      'تسرب وسيط التبريد',
      'شحن زائد أو ناقص',
      'استخدام نوع غير مناسب من وسيط التبريد',
      'وجود رطوبة أو هواء في النظام'
    ],
    maintenanceTips: [
      'فحص النظام بانتظام للكشف عن التسريبات',
      'استخدام النوع الصحيح من وسيط التبريد',
      'الحفاظ على الضغط المناسب داخل النظام',
      'السماح فقط للفنيين المعتمدين بالتعامل مع وسيط التبريد'
    ],
    imageUrl: '/images/refrigerant.png',
    position: {
      top: '60%',
      left: '40%',
      width: '15%',
      height: '15%'
    },
    category: 'both',
    relatedVideos: ['refrigerant-types', 'detecting-leaks']
  },
  {
    id: 'filter',
    name: 'فلتر الهواء',
    description: 'يقوم بتنقية الهواء من الغبار والشوائب قبل مروره عبر المبخر.',
    function: 'يمنع الأوساخ والغبار من دخول النظام، مما يحافظ على نظافة المبخر وكفاءة النظام.',
    commonIssues: [
      'انسداد الفلتر بالأوساخ',
      'تمزق الفلتر',
      'نمو العفن والبكتيريا',
      'انخفاض تدفق الهواء'
    ],
    maintenanceTips: [
      'تنظيف أو تغيير الفلتر كل 1-2 شهر',
      'غسل الفلتر القابل للغسل بالماء الفاتر والصابون الخفيف',
      'التأكد من جفاف الفلتر تمامًا قبل إعادة تركيبه',
      'استخدام الفلتر المناسب للجهاز'
    ],
    imageUrl: '/images/filter.png',
    position: {
      top: '20%',
      left: '60%',
      width: '10%',
      height: '10%'
    },
    category: 'indoor',
    relatedVideos: ['filter-cleaning', 'filter-types']
  },
  {
    id: 'pcb',
    name: 'لوحة التحكم الإلكترونية',
    description: 'الدماغ الإلكتروني للجهاز الذي يتحكم في جميع وظائفه.',
    function: 'تنسق عمل جميع مكونات النظام وتستجيب لإشارات من الثرموستات وأجهزة الاستشعار المختلفة.',
    commonIssues: [
      'أعطال بسبب ارتفاع الجهد الكهربائي',
      'تلف المكثفات',
      'تآكل الدوائر الإلكترونية',
      'أعطال بسبب السخونة الزائدة'
    ],
    maintenanceTips: [
      'الحفاظ على نظافة اللوحة من الغبار',
      'التأكد من التهوية الجيدة لتبريد اللوحة',
      'استخدام أجهزة حماية من تقلبات التيار الكهربائي',
      'فحص التوصيلات الكهربائية بشكل دوري'
    ],
    imageUrl: '/images/pcb.png',
    position: {
      top: '80%',
      left: '70%',
      width: '10%',
      height: '10%'
    },
    category: 'both',
    relatedVideos: ['pcb-diagnosis', 'pcb-replacement']
  },
  // أضف المزيد من مكونات التبريد هنا...
];

// مكونات الثلاجة
export const refrigerationComponents: ComponentType[] = [
  {
    id: 'compressor-fridge',
    name: 'ضاغط الثلاجة',
    description: 'يعمل على نفس مبدأ ضاغط التكييف ولكن بحجم أصغر وكفاءة مختلفة.',
    function: 'يضخ وسيط التبريد في دائرة الثلاجة، محولاً إياه من ضغط منخفض إلى ضغط عالي.',
    commonIssues: [
      'فشل في بدء التشغيل',
      'أصوات غير طبيعية',
      'ارتفاع درجة الحرارة',
      'تعطل الريليه الحراري'
    ],
    maintenanceTips: [
      'الحفاظ على تهوية جيدة حول الثلاجة',
      'فحص الريليه والوقاية الحرارية بانتظام',
      'الحفاظ على نظافة ملفات المكثف',
      'تجنب وضع الثلاجة بالقرب من مصادر الحرارة'
    ],
    imageUrl: '/images/fridge-compressor.png',
    category: 'refrigeration',
    relatedVideos: ['fridge-compressor-working']
  },
  {
    id: 'condenser-fridge',
    name: 'مكثف الثلاجة',
    description: 'يشبه مكثف التكييف ولكنه مصمم للثلاجات.',
    function: 'يطرد الحرارة من داخل الثلاجة إلى الخارج، محولاً وسيط التبريد من غاز إلى سائل.',
    commonIssues: [
      'تراكم الغبار والأوساخ',
      'انحناء الزعانف',
      'سوء التهوية حول المكثف',
      'تسريبات في أنابيب المكثف'
    ],
    maintenanceTips: [
      'تنظيف المكثف كل 6 أشهر',
      'التأكد من وجود مساحة كافية خلف الثلاجة للتهوية',
      'تجنب تغطية فتحات التهوية',
      'فحص المروحة للتأكد من عملها بشكل صحيح'
    ],
    imageUrl: '/images/fridge-condenser.png',
    category: 'refrigeration',
    relatedVideos: ['fridge-condenser-cleaning']
  },
  {
    id: 'evaporator-fridge',
    name: 'مبخر الثلاجة',
    description: 'يقع داخل الثلاجة ويكون عادةً مخفياً خلف الجدار الخلفي لحجرة التبريد.',
    function: 'يمتص الحرارة من داخل الثلاجة، مما يؤدي إلى تبريد المحتويات.',
    commonIssues: [
      'تراكم الثلج بشكل مفرط',
      'تعطل دورة إزالة الثلج',
      'انسداد مصارف المياه',
      'تسريبات في أنابيب المبخر'
    ],
    maintenanceTips: [
      'التأكد من عمل نظام إذابة الثلج بشكل صحيح',
      'تنظيف مصارف المياه بانتظام',
      'تجنب وضع أطعمة ساخنة في الثلاجة',
      'فحص مروحة المبخر إن وجدت'
    ],
    imageUrl: '/images/fridge-evaporator.png',
    category: 'refrigeration',
    relatedVideos: ['fridge-evaporator-maintenance']
  },
  {
    id: 'thermostat-fridge',
    name: 'ثرموستات الثلاجة',
    description: 'يتحكم في درجة حرارة الثلاجة عن طريق تشغيل وإيقاف الضاغط.',
    function: 'يراقب درجة الحرارة داخل الثلاجة ويشغل الضاغط عندما ترتفع فوق المستوى المحدد.',
    commonIssues: [
      'قراءات غير دقيقة',
      'تلف في آلية التشغيل',
      'عدم الاستجابة لتغيير الإعدادات',
      'تشغيل الضاغط بشكل متواصل أو عدم تشغيله'
    ],
    maintenanceTips: [
      'التحقق من الإعدادات المناسبة حسب الموسم',
      'فحص التوصيلات الكهربائية',
      'تجنب التغيير المتكرر للإعدادات',
      'استبداله عند وجود مشاكل مستمرة'
    ],
    imageUrl: '/images/fridge-thermostat.png',
    category: 'refrigeration',
    relatedVideos: ['fridge-thermostat-adjustment']
  },
];

// أنواع الثرموستات
export const thermostatTypes = [
  {
    id: 'mechanical-thermostat',
    name: 'الثرموستات الميكانيكي',
    description: 'يعتمد على التمدد والانكماش الحراري للمعادن أو السوائل للتحكم في التشغيل.',
    advantages: [
      'بسيط التصميم',
      'موثوقية عالية',
      'سهولة الإصلاح',
      'تكلفة منخفضة'
    ],
    disadvantages: [
      'أقل دقة في التحكم بدرجة الحرارة',
      'خيارات تحكم محدودة',
      'لا يمكن برمجته',
      'استهلاك طاقة أعلى'
    ],
    imageUrl: '/images/mechanical-thermostat.png',
  },
  {
    id: 'digital-thermostat',
    name: 'الثرموستات الرقمي',
    description: 'يستخدم حساسات إلكترونية وشاشة رقمية للتحكم في درجة الحرارة.',
    advantages: [
      'أكثر دقة في قراءة وضبط درجة الحرارة',
      'شاشة رقمية سهلة القراءة',
      'إمكانية برمجة جداول زمنية',
      'تحكم أفضل بمستويات الراحة'
    ],
    disadvantages: [
      'تكلفة أعلى',
      'يحتاج لمصدر طاقة دائم أو بطاريات',
      'أكثر تعقيداً في الإصلاح',
      'قد يتأثر بالتداخل الكهرومغناطيسي'
    ],
    imageUrl: '/images/digital-thermostat.png',
  },
  {
    id: 'smart-thermostat',
    name: 'الثرموستات الذكي',
    description: 'جهاز متطور متصل بالإنترنت يمكن التحكم فيه عن بعد وقد يتضمن ميزات التعلم الآلي.',
    advantages: [
      'التحكم عن بعد عبر الهاتف الذكي',
      'القدرة على التعلم من سلوك المستخدم',
      'تقارير استهلاك الطاقة',
      'التكامل مع أنظمة المنزل الذكي'
    ],
    disadvantages: [
      'تكلفة عالية',
      'يعتمد على اتصال إنترنت مستقر',
      'قد يكون معقداً للمستخدمين غير التقنيين',
      'مخاوف الخصوصية والأمان'
    ],
    imageUrl: '/images/smart-thermostat.png',
  },
];

// Placeholder data for video content
export const videoContent = [
  {
    id: 'intro-hvac',
    title: 'مقدمة في التكييف والتبريد',
    description: 'فيديو تعريفي يشرح أساسيات أنظمة التكييف والتبريد وكيفية عملها.',
    duration: '15:30',
    thumbnail: '/images/video-thumbnail-1.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'basics'
  },
  {
    id: 'compressor-working',
    title: 'كيف يعمل الضاغط (الكمبروسور)',
    description: 'شرح تفصيلي لآلية عمل الضاغط في أنظمة التكييف.',
    duration: '12:45',
    thumbnail: '/images/video-thumbnail-2.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'components'
  },
  {
    id: 'troubleshooting',
    title: 'تشخيص وإصلاح الأعطال الشائعة',
    description: 'دليل عملي لتحديد وإصلاح المشكلات الشائعة في أجهزة التكييف.',
    duration: '23:10',
    thumbnail: '/images/video-thumbnail-3.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'maintenance'
  },
  {
    id: 'refrigerant-cycle',
    title: 'دورة وسيط التبريد في النظام',
    description: 'شرح مفصل لكيفية انتقال وسيط التبريد في دائرة التبريد المغلقة.',
    duration: '18:20',
    thumbnail: '/images/video-thumbnail-4.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'basics'
  },
  {
    id: 'energy-efficiency',
    title: 'كفاءة الطاقة في أنظمة التكييف',
    description: 'دليل لتحسين كفاءة استهلاك الطاقة في أنظمة التكييف وتقليل التكاليف.',
    duration: '17:35',
    thumbnail: '/images/video-thumbnail-5.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'efficiency'
  },
  {
    id: 'filter-cleaning',
    title: 'كيفية تنظيف فلاتر التكييف',
    description: 'خطوات عملية لتنظيف فلاتر الهواء وتحسين كفاءة التكييف.',
    duration: '08:15',
    thumbnail: '/images/video-thumbnail-6.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'maintenance'
  },
];
