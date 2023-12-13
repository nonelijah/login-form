const wrap = document.querySelector(".wrap-login");
const wrapBox = wrap.querySelector(".wrap-login-box");
const dim = wrap.querySelector(".modal-dim");
const modal = wrap.querySelector(".modal-login");

// 로그인 모달 열기
function openModal() {
    document.body.classList.add("scroll-lock");
    wrapBox.classList.add("close");
    dim.classList.remove("close");
    modal.classList.remove("close");
}

// 로그인 모달 닫기
function closeModal() {
    document.body.classList.remove("scroll-lock");
    modal.classList.add("close");
    dim.classList.add("close");
    wrapBox.classList.remove("close");
}
dim.addEventListener("click", closeModal);

// 초기 모달창 및 dim 닫기
dim.classList.add("close");
modal.classList.add("close");
