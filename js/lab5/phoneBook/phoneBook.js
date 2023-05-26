var phoneBook = [{name: "Максим", phone: "0667532458", email: "maksim@gmail.com"}];

/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function (name, phone, email) {
  phoneBook.push({name: name, phone: phone, email: email});
};

/*
   Функція пошуку записів в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function (query) {
  for(var i = 0; i < phoneBook.length; i++)
  {
    if (phoneBook[i].name.includes(query))
    {
      document.write(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email + "</br>")
    }

    else if (phoneBook[i].phone.includes(query))
    {
      document.write(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email + "</br>")
    }

    else if (phoneBook[i].email.includes(query))
    {
      document.write(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email + "</br>")
    }
  }
  document.write("</br>");
};
/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function (query) {
  var count = 0;

  for(var i = 0; i < phoneBook.length; i++)
  {
    if (phoneBook[i].name.includes(query))
    {
      phoneBook.splice(i, 1);
      count++;
      continue;
    }

    else if (phoneBook[i].phone.includes(query))
    {
      phoneBook.splice(i, 1);
      count++;
      continue;
    }

    else if (phoneBook[i].email.includes(query))
    {
      phoneBook.splice(i, 1);
      count++;
      continue;
    }
  }

  document.write("Вилучений " + count + " контакт");
  document.write("</br></br>");
};

/*
   Функція виведення всіх телефонів.
*/
function showTable(data) {
  var parent = document.getElementsByTagName("body");
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  
  var th = document.createElement('th');
  th.innerHTML = "Ім'я";
  tr.appendChild(th);

  var th = document.createElement('th');
  th.innerHTML = "Телефон";
  tr.appendChild(th);
  
  var th = document.createElement('th');
  th.innerHTML = "Email";
  tr.appendChild(th);

  table.appendChild(tr);

  for (var i = 0; i < data.length; i++)
  {
      var tr = document.createElement('tr');

      var td = document.createElement('td');
      td.innerHTML = data[i].name;
      tr.appendChild(td);

      var td = document.createElement('td');
      td.innerHTML = data[i].phone;
      tr.appendChild(td);
  
      var td = document.createElement('td');
      td.innerHTML = data[i].email;
      td.style.textAlign = 'right';
      tr.appendChild(td);

      table.appendChild(tr);
  }
  
  parent[0].appendChild(table);
}

