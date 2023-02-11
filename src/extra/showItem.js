const savedOptions = document.querySelector(".savedOptions");

// localstorage에 있는 모든 key와 밸류 가져오기
// 배열로 만들어야 함
// 각 배열에서 key 값만을 savedOptions의 option태그로 생성

const keyArr = [];
for (let i = 0; i < localStorage.length; i++) {
  keyArr.push(localStorage.key(i));
}
for (let i = 0; i < keyArr.length; i++) {
  const savedTitle = document.querySelector(".savedTitle");

  const newItem = document.createElement("option");
  newItem.innerHTML = keyArr[i];
  savedOptions.appendChild(newItem);

  savedTitle.classList.remove("hidden");
  savedOptions.classList.remove("hidden");
}

// option태그가 클릭되면 클릭된 값의 key값을 localstorage 에서 찾기
// 찾은 Key와 value를 html에 표기해야함. -> React면 되게 쉽게 하는데..
// 수정, 삭제 기능도 구현 -> 어떻게 해야할까?

let selectedValue;
let prevSelectedValue;

const findValue = () => {
  prevSelectedValue = selectedValue;
  selectedValue = savedOptions.options[savedOptions.selectedIndex].text;
  hideItems();
  spreadItems();
};

const spreadItems = () => {
  const foundItem = JSON.parse(localStorage.getItem(selectedValue));

  if (selectedValue === "물건명") {
  } else {
    // 인덱스 / 키값을 추가해서 그 키값에 hidden 클래스가 있는지 확인, 있으면 hidden만 지우기
    // 없다면 그만큼 요소 추가
    const hiddenItems = document.querySelectorAll(`.${foundItem.stock}`);

    for (let i = 0; i < hiddenItems.length; i++) {
      if (hiddenItems[i] !== undefined) {
        hiddenItems[i].classList.remove("hidden");
      }
    }
    for (
      let keyValue = hiddenItems.length;
      keyValue < foundItem.date.length;
      keyValue++
    ) {
      createItems(keyValue);
    }
  }
};

const createItems = (keyValue) => {
  const showSection = document.querySelector(".showSection");
  const foundItem = JSON.parse(localStorage.getItem(selectedValue));

  // sectionContainer 생성
  const newSectionContainer = document.createElement("div");
  newSectionContainer.setAttribute(
    "class",
    `sectionContainer ${foundItem.stock} ${foundItem.stock + keyValue}`
  );
  showSection.appendChild(newSectionContainer);

  // sectionContainer의 첫 번째 자식 요소 재생성,
  // 첫 번째 자식요소 텍스트 구성
  const newFirstDiv = document.createElement("div");
  newFirstDiv.setAttribute("class", `flex-center-center`);

  const newContentTime = document.createElement("p");
  newContentTime.setAttribute("class", `contentTime`);
  newContentTime.innerHTML = `날짜 : ${foundItem.date[keyValue]}`;

  const newSecondDiv = document.createElement("div");
  newSecondDiv.setAttribute("class", `flex-center-center`);

  newSectionContainer.appendChild(newFirstDiv);
  newSectionContainer.appendChild(newContentTime);
  newSectionContainer.appendChild(newSecondDiv);

  // 첫 번째 자식요소의 두 번째 자식요소 재생성
  // 두 번째 자식요소 텍스트 구성
  const newTitleContainer = document.createElement("div");
  newTitleContainer.setAttribute("class", `titleContainer`);
  newFirstDiv.appendChild(newTitleContainer);

  const newContent = document.createElement("pre");
  newContent.setAttribute("class", `content`);
  newContent.innerHTML = `${foundItem.content[keyValue]}`;
  newSecondDiv.appendChild(newContent);

  // 두 번째 자식요소의 세 번째 자식요소 재생성
  // 세 번째 자식요소 텍스트 구성
  const newContentTitle = document.createElement("h2");
  newContentTitle.setAttribute("class", `contentTitle`);
  newContentTitle.innerHTML = `물건명 : ${foundItem.stock}`;

  const newEditBtn = document.createElement("p");
  newEditBtn.setAttribute(
    "class",
    `edit editButton${foundItem.stock + keyValue}`
  );
  newEditBtn.innerHTML = "수정";

  const newDeleteBtn = document.createElement("p");
  newDeleteBtn.setAttribute(
    "class",
    `delete deleteButton${foundItem.stock + keyValue}`
  );
  newDeleteBtn.innerHTML = "삭제";

  newTitleContainer.appendChild(newContentTitle);
  newTitleContainer.appendChild(newEditBtn);
  newTitleContainer.appendChild(newDeleteBtn);
};

const hideItems = () => {
  if (prevSelectedValue === undefined) {
  } else {
    const toHide = document.querySelectorAll(`.${prevSelectedValue}`);
    for (let i = 0; i < toHide.length; i++) {
      toHide[i].remove();
    }
  }
};
