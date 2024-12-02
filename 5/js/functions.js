const checkLenght = (string, len) => (string.length <= len);

const checkPalidrom = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();

  let index = 0;

  for(let indexRev = string.length - 1; indexRev > 0; indexRev--){
    if(string[indexRev] !== string[index]){
      return false;
    }
    index++;
  }
  return true;
};


function isMeetingWithinWorkHours(startWork, endWork, startMeeting, meetingDuration) {
  // Вспомогательная функция для преобразования времени (часы:минуты) в минуты с начала дня
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Преобразование всех временных точек в минуты
  const startWorkMinutes = timeToMinutes(startWork);
  const endWorkMinutes = timeToMinutes(endWork);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;

  // Проверяем, входит ли встреча в рамки рабочего дня
  return startMeetingMinutes >= startWorkMinutes && endMeetingMinutes <= endWorkMinutes;
}
