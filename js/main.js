// Функция для генерации случайного числа в диапазоне
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации уникального ID
const generateUniqueId = (usedIds, min, max) => {
  let id;
  do {
    id = getRandomInt(min, max);
  } while (usedIds.has(id));
  usedIds.add(id);
  return id;
};

// Генерация массива с описанием фотографий
const generatePhotos = () => {
  const descriptions = [
    'Прекрасный закат над океаном.',
    'Дикие цветы в летнем лесу.',
    'Городская суета в вечернем свете.',
    'Семейная прогулка в парке.',
    'Красоты горных пейзажей.'
  ];

  const commentsMessages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const names = ['Артём', 'Ольга', 'Иван', 'Мария', 'Александр', 'Татьяна', 'Дмитрий', 'Екатерина'];

  const usedPhotoIds = new Set();
  const usedCommentIds = new Set();

  const generateComments = () => {
    const commentsCount = getRandomInt(0, 30);
    const comments = [];

    for (let i = 0; i < commentsCount; i++) {
      comments.push({
        id: generateUniqueId(usedCommentIds, 1, 1000),
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        message: commentsMessages[getRandomInt(0, commentsMessages.length - 1)],
        name: names[getRandomInt(0, names.length - 1)]
      });
    }

    return comments;
  };

  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: generateUniqueId(usedPhotoIds, 1, 25),
      url: `photos/${i}.jpg`,
      description: descriptions[getRandomInt(0, descriptions.length - 1)],
      likes: getRandomInt(15, 200),
      comments: generateComments()
    });
  }

  return photos;
};
