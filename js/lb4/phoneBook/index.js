// Додаємо записи
phoneBook.add('Андрій', '8 099 6667778', 'as@example.com');
phoneBook.add('Андрій 2', '089 4433444', 'as@example.com');
phoneBook.add('Олег', '+38 (077) 777-7-777', 'abc7@google.com');

phoneBook.find('777');
// Виводить по рядках записи, всі поля через кому:
// Андрій, 8 099 6667778, as@example.com
// Олег, +38 (077) 777-7-777, abc7@google.com

phoneBook.remove('Олег');
// Виводить кількість вилучених контактів, які задовільнять запиту:
// Вилучений 1 контакт

// Виводить записи у вигляді красивої таблички
phoneBook.showTable();
// Виводить
// ┌─────────────┬────────────────────╥──────────────────┐
// │ Ім'я        │    Телефон         ║      email       │
// ├─────────────┼────────────────────╫──────────────────┤
// │ Андрій      │  8 099 6667778     ║ as@example.com   │
// │ Андрій 2    │    089 4433444     ║ as@example.com   │
// └─────────────┴────────────────────╨──────────────────┘

