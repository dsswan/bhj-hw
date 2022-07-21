const BAD_PHRASES = [
  "Шоб ты жил на одну зарплату!",
  "Не волнуйтесь, я тоже забыл как вас зовут.",
  "Уходите? Зачем же так неспешно?!",
  "Я б вас послал, да вижу - вы оттуда",
  "На вас природа славно отдохнула!",
  "С метлы упала, что ли?",
  "Не будите во мне зверя",
  "Муля, не нервируй меня",
  "Сам ты кожаный мешок",
  "Пишите Папе Римскому и пейте",
  "Почему? По кочану.",
];

const getRandomFromDictionary = (listWords) => {
  const idx = Math.floor(Math.random() * listWords.length);
  return listWords[idx];
};

const ready = () => {
  const ChatWidget = document.querySelector(".chat-widget");
  const chatWidgetSide = ChatWidget.querySelector(".chat-widget__side");
  const MessagesArea = ChatWidget.querySelector(".chat-widget__messages");
  const ChatInput = document.getElementById("chat-widget__input");

  let dialogStarted = false;

  const getTimeString = () => {
    const formatXX = (value) => {
      const valueString = value.toString();
      return valueString.length > 1 ? valueString : `0${valueString}`;
    };

    const now = new Date();
    const hours = now.getHours();
    const minute = now.getMinutes();

    return `${formatXX(hours)}:${formatXX(minute)}`;
  };

  const addMessage = (message, isClient = false) => {
    const messageClass = isClient ? "message message_client" : "message";
    const time = getTimeString();
    MessagesArea.innerHTML += `
      <div class="${messageClass}">
        <div class="message__time">${time}</div>
        <div class="message__text">
           ${message}
        </div>
      </div>
    `;
    onScroll();
  };

  chatWidgetSide.addEventListener("click", () => {
    ChatWidget.classList.add("chat-widget_active");
    setTimeout(() => {
      if (!dialogStarted) {
        dialogStarted = true;
        onRobotResponse();
      }
    }, 30000);
  });

  const onRobotResponse = () => {
    addMessage(getRandomFromDictionary(BAD_PHRASES));
  };

  const onScroll = () => {
    const elements = MessagesArea.querySelectorAll(".message");
    elements.item(elements.length - 1).scrollIntoView();
  };

  const onChangeChatInput = (event) => {
    dialogStarted = true;
    const messageClientString = event.target.value.trim();
    addMessage(messageClientString, true);
    event.target.value = "";
    onRobotResponse();
  };

  ChatInput.addEventListener("change", onChangeChatInput);
};

document.addEventListener("DOMContentLoaded", ready);
