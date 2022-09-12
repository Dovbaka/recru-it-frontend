import { Test } from '../interfaces/RecruitInterface';

export const questions = [
    {
        id: '1Q1',
        question:
            'Ви витрачаєте багато свого вільного часу, досліджуючи різні випадкові теми, які викликають у вас інтерес',
        category: 'SELF_SUFFICIENCY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q2',
        question: 'Ви, як правило, не починаєте розмову',
        category: 'COMMUNICABILITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.3 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q3',
        question:
            'Вам легко залишатися сконцентрованим навіть у напруженій обстановці',
        category: 'STRESS_TOLERANCE',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q4',
        question: 'Бути організованим вам важливіше, ніж вміти пристосуватися',
        category: 'SELF_SUFFICIENCY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.3 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q5',
        question: 'Ви не проти того, щоб бути у центрі уваги',
        category: 'COMMUNICABILITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q6',
        question: 'Ви вважаєте себе більш практичною, ніж креативною людиною',
        category: 'CREATIVITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q7',
        question: 'Під час дискусії правда має бути важливішою за почуття інших людей.',
        category: 'RATIONALITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q8',
        question:
            'Ваш стиль роботи можна швидше охарактеризувати як безладні сплески енергії, а не методична та організована діяльність',
        category: 'SELF_SUFFICIENCY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q9',
        question:
            'Можливість розробити план і наслідувати його - найважливіша частина будь-якого проекту',
        category: 'RATIONALITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q10',
        question:
            'Вам легко залишатися врівноваженим та сконцентрованим навіть у напруженій обстановці',
        category: 'STRESS_TOLERANCE',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q11',
        question: 'Ви не дозволяєте іншим людям впливати на ваші дії',
        category: 'STRESS_TOLERANCE',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q12',
        question: 'Вам не займає багато часу влитися в колектив на новому робочому місці',
        category: 'COMMUNICABILITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q13',
        question: 'Ви природніший імпровізатор, ніж обережний планувальник',
        category: 'RATIONALITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q14',
        question:
            'Коли йдеться про прийняття важливих рішень для вас логіка, як правило, важливіше за почуття',
        category: 'RATIONALITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q15',
        question: 'Вам не складно встановлювати особистий графік та дотримуватися його',
        category: 'SELF_SUFFICIENCY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q16',
        question: 'Ви почуваєтеся енергійнішим після часу, проведеного в групі людей',
        category: 'COMMUNICABILITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q17',
        question: 'Ви б назвали себе мрійливою людиною',
        category: 'CREATIVITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q18',
        question: 'Ви дуже переживаєте у стресових ситуаціях.',
        category: 'STRESS_TOLERANCE',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q19',
        question:
            'У вас є звичка відкладати все на потім, допоки вже не вистачає часу все зробити.',
        category: 'SELF_SUFFICIENCY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q20',
        question:
            'Вас завжди цікавили нетрадиційні та багатозначні речі, наприклад, у книгах, мистецтві чи кінематографі.',
        category: 'CREATIVITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q21',
        question:
            'Ви легко вмієте адаптуватись та імпровізувати.',
        category: 'CREATIVITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q22',
        question:
            'Спробуйте продовжити ряд чисел: 2, 4, 7, 14, 17...',
        category: 'RATIONALITY',
        answers: [
            { id: '1', text: '34', value: 2 },
            { id: '2', text: '24', value: 0.7 },
            { id: '3', text: '27', value: 0.3 },
            { id: '4', text: '37', value: 0.1 },
            { id: '5', text: '42', value: 0.1 },
        ],
    },
    {
        id: '1Q23',
        question:
            'Ви рідко переживаєте щодо того, який ваші слова можуть вплинути на інших людей.',
        category: 'COMMUNICABILITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1Q24',
        question:
            'Ви легко можете уявити образ неіснуючого предмета чи явища.',
        category: 'CREATIVITY',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 2 },
            { id: '2', text: 'Швидше згоден', value: 1 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 0.3 },
            { id: '5', text: 'Повністю не згоден', value: 0.1 },
        ],
    },
    {
        id: '1Q25',
        question:
            'Якщо щось йде не за планом ви починаєте переживати',
        category: 'STRESS_TOLERANCE',
        answers: [
            { id: '1', text: 'Повністю згоден', value: 0.1 },
            { id: '2', text: 'Швидше згоден', value: 0.3 },
            { id: '3', text: 'Не впевнений', value: 0.5 },
            { id: '4', text: 'Швидше не згоден', value: 1 },
            { id: '5', text: 'Повністю не згоден', value: 2 },
        ],
    },
    {
        id: '1QL1',
        question:
            'Який на даний момент ваш рівень здобутої освіти?',
        category: 'QUALIFICATION',
        answers: [
            { id: '1', text: 'Вищий, магістр', value: 8 },
            { id: '2', text: 'Вищий, бакалавр', value: 6 },
            { id: '3', text: 'Середній', value: 4 },
            { id: '4', text: 'Початковий', value: 1 },
            { id: '5', text: 'Без освіти', value: 0 },
        ],
    },
    {
        id: '1QL2',
        question:
            'Чи закінчували ви якісь курси по обраномій ролі?',
        category: 'QUALIFICATION',
        answers: [
            { id: '1', text: 'Так, закінчив', value: 2 },
            { id: '2', text: 'Проходжу в даний момент', value: 1 },
            { id: '3', text: 'Ні, не закінчив', value: 0 }
        ],
    },
    {
        id: '1QE',
        question:
            'Скільки років ви працювали на обраній ролі?',
        category: 'EXPERIENCE',
        answers: [
            { id: '0', text: 'Більше п\'яти років', value: 10 },
            { id: '1', text: 'До п\'яти років', value: 5 },
            { id: '2', text: 'До чотирьох років', value: 4 },
            { id: '3', text: 'До трьох років', value: 3 },
            { id: '4', text: 'До двох років', value: 2 },
            { id: '5', text: 'До року', value: 1 },
            { id: '6', text: 'Менше півроку', value: 0.5 },
            { id: '7', text: 'Не працював', value: 0 },
        ],
    }
] as Test[];
