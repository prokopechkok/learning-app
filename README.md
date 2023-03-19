# Кейсове завдання

Перш ніж розпочати роботу над кейсом, ознайомся, будь ласка, з основними **організаційними деталями** цього етапу відбору.

### **Важлива інформація**

- Дедлайн здачі кейсового завдання: **18 березня, 23:59.**
- Виконаний кейс **необхідно завантажити на GitHub**. Посилання на репозиторій з  готовим проєктом **надсилай у Google-форму** — [https://forms.gle/qe3f3QBwCtMuptH86](https://forms.gle/qe3f3QBwCtMuptH86)
- В GitHub, окрім проєкту, ти можеш додавати коментарі чи опис логіки виконання  роботи в README.md документі. Правильна логіка може стати перевагою при  оцінюванні, якщо ти не повністю виконаєш завдання.
- Очікувані мови виконання завдання: JavaScript, TypeScript.
- Виконувати завдання іншими мовами можна, проте, це не буде перевагою. В роботі  можна використовувати будь-який фреймворк/бібліотеку. Буде плюсом Vue, React,  Angular.
- Ти можеш користуватися усією доступною інформацією, але виконуй завдання  самостійно.

<aside>
💡 **Опис завдання**

Твоя задача — створити застосунок для навчання. Для цього вже підготовлено API —[https://www.postman.com/aninix/workspace/genesis-front-end-school/overview](https://www.postman.com/aninix/workspace/genesis-front-end-school/overview), його необхідно буде форкнути у свій акаунт postman та можна працювати.

Застосунок має гарно виглядати, але для інженера код важливіший. Тому можна вільно використати готові UI-бібліотеки. На ваш розсуд, які дані ви будете показувати користувачу.

Додаток містить дві сторінки:

- сторінка з курсами;
- сторінка з переглядом уроку;

Детально про сторінки:

- В стрічці з курсами необхідно відобразити останні 10 курсів. Курс містить:
  - Заголовок.
  - Фото курсу.
  - Заголовок курсу.
  - Кількість уроків, навички та рейтинг.
  - На сторінці виводимо 10 курсів і додаємо пагінацію.
  - Додатково:
    - при ховері відтворювати відео без звуку.
- На сторінці з переглядом курсу відображається перше відео з даного курсу, деталі про курс та список уроків:
  - При кліку на урок (якщо він не заблокований) для перегляду відкриється поточне відео, користувач повинен розуміти, який урок з курсу переглядає.
  - Необхідно зберігати прогрес перегляду відео та уроку курсу (зберігати локально).
  - Якщо урок заблокований показати це користувачу.
  - Додатково:
    1. Зробити функціонал picture in picture (без сторонніх бібліотек):
       - Відео можна вивести поверх сторінки при кліку. При цьому відео знаходиться у правому нижньому куті сторінки й можна ходити по інших сторінках.
    2. Додати зміну швидкості програвання відео через клавіатуру (без сторонніх бібліотек) (комбінація клавіш на власний розсуд):
       - Так же вивести інформацію біля відео як цим користуватись.

Додаткові завдання:

- пропрацювати помилки від API (помилка мережі, ...);
- адаптив під мобільну версію;
- анімація завантаження відео;
- код покритий тестами;

Технічні деталі:

Щоб показати зображення:

- для курсу: `previewImageLink + '/cover.webp'`
- для уроку: `previewImageLink + '/' + lesson.order + '.webp'`

В реалізації використовувати стандартний відеоплеєр.

</aside>
