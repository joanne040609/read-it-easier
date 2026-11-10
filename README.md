# Read It Easier

幫助繁體中文使用者閱讀英文文獻的 APP（PWA，手機與電腦共用同一份程式）。

- 上傳 PDF，在 APP 中閱讀（PDF 只在裝置上開啟，不會上傳）
- 選取單字、專有名詞或句子，側邊欄顯示繁體中文翻譯；專有名詞會簡述其實驗意義
- 生詞表：可加星號，並依研究方向自動分成一份份清單（例如「神經科學」「奈米材料」「英語學術寫作常用字」）。「重新整理分類」會依字數與你的分類習慣調整清單的粗細：詞多的方向拆細，零星的詞併入較廣的清單；你親手移動的詞與自訂的清單不會被更動

## 安裝成 APP

1. 把這個資料夾發佈到 GitHub，並在 repo 的 **Settings → Pages** 選擇 `main` 分支 → Save。
2. 幾分鐘後會得到網址 `https://<你的帳號>.github.io/read-it-easier/`。
3. **電腦**（Chrome / Edge）：打開網址，按網址列右側的「安裝」圖示。
   **Android**（Chrome）：選單 →「安裝應用程式」。
   **iPhone / iPad**（Safari）：分享 →「加入主畫面」。

安裝後可離線開啟與閱讀 PDF；翻譯需要網路。

## 翻譯設定

APP 版的翻譯直接呼叫 Claude API，需要在「設定」填入自己的 Anthropic API 金鑰（依用量計費，與 Claude 訂閱分開）。金鑰只存在該裝置的瀏覽器中，不在程式碼裡，也不會進到 GitHub。

## 生詞表資料

生詞表存在各裝置的瀏覽器儲存空間。要在手機與電腦之間搬移：「設定 → 匯出備份檔」，到另一台「匯入備份檔」（會合併）。

## 本機開發

```bash
python -m http.server 8080   # 然後開 http://localhost:8080
```

發新版時請同時修改 `index.html` 的 `APP_VERSION` 與 `sw.js` 的 `CACHE`。

## 檔案

```
index.html      整個 APP（畫面、PDF 閱讀、翻譯、生詞表）
manifest.json   PWA 設定（名稱、圖示）
sw.js           離線快取
icons/          APP 圖示
vendor/         PDF.js 3.11.174（Apache-2.0）
```
