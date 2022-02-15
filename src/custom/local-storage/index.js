import store from '../../store'

//  在頁面載入時讀取 localStorage 裡的 store 狀態資訊
if (localStorage.getItem("store")) {
    store.replaceState(
        Object.assign(
            {},
            store.state,
            JSON.parse(localStorage.getItem("store"))
        )
    );
}

//  在頁面重新整理/關閉時將 store 裡的資訊儲存到 localStorage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("store", JSON.stringify(store.state));
});
