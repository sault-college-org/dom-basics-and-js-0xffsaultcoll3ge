const Appetizer = () => {
    const AppetizerContent = document.createElement('div');
    AppetizerContent.setAttribute('class', 'container');
  
    const AppetizerHeader = document.createElement('h1');
    AppetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    AppetizerHeader.innerHTML = 'Appetizers';
  
    const AppetizerList = document.createElement('ul');
    AppetizerList.setAttribute('class', 'AppetizerList');
  
    const AppetizerItems = () => {
      const list = document.createElement('li');
      list.setAttribute('class', 'nav-item list-unstyled mx-2');
  
      const Appetizer1 = document.createElement('h1');
      Appetizer1.setAttribute('id', 'appetizer1');
      Appetizer1.setAttribute('class', 'text-center');
      Appetizer1.innerHTML = 'CALAMARI';
      list.appendChild(Appetizer1);
      const AppetizerParagraph1 = document.createElement('p');
      AppetizerParagraph1.setAttribute('class', 'my-3 pb-3');
      AppetizerParagraph1.innerHTML = 'Top of the line calamari';
      list.appendChild(AppetizerParagraph1);
  
      const Appetizer2 = document.createElement('h1');
      Appetizer2.setAttribute('id', 'appetizer2');
      Appetizer2.setAttribute('class', 'text-center');
      Appetizer2.innerHTML = 'MUSSELS';
      list.appendChild(Appetizer2);
      const AppetizerParagraph2 = document.createElement('p');
      AppetizerParagraph2.setAttribute('class', 'my-3 pb-3');
      AppetizerParagraph2.innerHTML = 'Garlic mussels - steamed to silky perfection';
      list.appendChild(AppetizerParagraph2);
  
      const Appetizer3 = document.createElement('h1');
      Appetizer3.setAttribute('id', 'appetizer3');
      Appetizer3.setAttribute('class', 'text-center');
      Appetizer3.innerHTML = 'SPINACH DIP';
      list.appendChild(Appetizer3);
      const AppetizerParagraph3 = document.createElement('p');
      AppetizerParagraph3.setAttribute('class', 'my-3 pb-3');
      AppetizerParagraph3.innerHTML = 'AMAZING SPINACH DIP MADE WITH REAL SPINACH';
      list.appendChild(AppetizerParagraph3);
  
      return list;
    };
  
    AppetizerContent.appendChild(AppetizerHeader);
    AppetizerContent.appendChild(AppetizerItems());
  
    return AppetizerContent;
  };
  
  export default Appetizer;