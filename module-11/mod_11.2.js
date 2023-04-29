let myArray = [];

function addElement() {
  const input = document.getElementById('input').value;
  myArray.push(input);
  const list = document.getElementById('list');
  const listItem = document.createElement('li');
  const itemText = document.createTextNode(input);
  listItem.appendChild(itemText);
  listItem.setAttribute("id", `item-${myArray.length}`);
  listItem.addEventListener('click', removeItem);
  listItem.addEventListener('mouseover', function() {
    this.style.color = 'red';
  });
  listItem.addEventListener('mouseout', function() {
    this.style.color = 'black';
  });
  list.appendChild(listItem);
}

function deleteLastItem() {
  myArray.pop();
  const list = document.getElementById('list');
  list.removeChild(list.lastChild);
}

function displayList() {
  let printContents = "";
  for (let i = 0; i < myArray.length; i++) {
    printContents += `${i+1}. ${myArray[i]}\n`;
  }
  const printWindow = window.open('', '', 'height=500,width=500');
  printWindow.document.write('<html><head><title>Print Contents</title></head><body>');
  printWindow.document.write(`<pre>${printContents}</pre>`);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

function removeItem(event) {
  const itemId = event.target.id;
  const itemIndex = parseInt(itemId.substring(5));
  myArray.splice(itemIndex - 1, 1);
  const list = document.getElementById('list');
  const listItem = document.getElementById(itemId);
  list.removeChild(listItem);
  updateIds(itemIndex);
}

function updateIds(startIndex) {
  const list = document.getElementById('list');
  for (let i = startIndex; i <= myArray.length; i++) {
    const item = document.getElementById(`item-${i+1}`);
    item.setAttribute("id", `item-${i}`);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('add-btn').addEventListener('click', addElement);
  document.getElementById('del-btn').addEventListener('click', deleteLastItem);
  document.getElementById('display-btn').addEventListener('click', displayList);
  const listItems = document.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', function() {
      this.style.color = 'red';
    });
    listItems[i].addEventListener('mouseout', function() {
      this.style.color = 'black';
    });
  }
});
