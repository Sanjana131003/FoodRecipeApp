const fs = require("fs");
const p = "foodRecipe/frontend/food-blog-app/src/index.css";
let css = fs.readFileSync(p, "utf8");

// Find and replace the entire auth modal block
const startMarker = "/* ============================================================\n   AUTH MODAL";
const endMarker = "/* ============================================================\n   RECIPE DETAIL";

const s = css.indexOf(startMarker);
const e = css.indexOf(endMarker);

if (s === -1 || e === -1) { console.error("markers not found", s, e); process.exit(1); }

const newCSS = `/* ============================================================
   AUTH MODAL
   ============================================================ */

/* Overlay that covers everything */
.auth-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal box — centered via flexbox on backdrop */
.auth-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 90%;
  max-width: 460px;
  max-height: 88vh;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.35), 0 8px 32px rgba(0,0,0,0.15);
  padding: 44px 40px 40px;
  border: 1px solid rgba(0,0,0,0.06);
}

[data-theme="dark"] .auth-modal {
  background: #292524;
  border-color: #3c3836;
}

.auth-modal::-webkit-scrollbar { width: 4px; }
.auth-modal::-webkit-scrollbar-thumb { background: #fed7aa; border-radius: 4px; }

/* Close button */
.auth-modal__close {
  position: absolute;
  top: 18px; right: 18px;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #f5f5f4;
  border: 1px solid #e7e5e4;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #78716c;
  transition: all 0.2s ease;
  z-index: 1;
}
[data-theme="dark"] .auth-modal__close { background: #3c3836; border-color: #57534e; color: #a8a29e; }
.auth-modal__close:hover { background: #e7e5e4; color: #1c1917; transform: rotate(90deg); }

/* Header */
.auth-modal__header { text-align: center; margin-bottom: 28px; }

.auth-modal__logo {
  width: 68px; height: 68px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04));
  border: 2px solid rgba(249,115,22,0.2);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 24px rgba(249,115,22,0.12);
}

.auth-modal__title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1c1917;
  margin-bottom: 8px;
  letter-spacing: -0.025em;
}
[data-theme="dark"] .auth-modal__title { color: #fafaf9; }

.auth-modal__subtitle {
  font-size: 0.9rem;
  color: #78716c;
  line-height: 1.6;
}

/* Tab toggle */
.auth-modal__tabs {
  display: flex;
  background: #fef3e2;
  border-radius: 50px;
  padding: 5px;
  margin-bottom: 28px;
  border: 1px solid #e7e5e4;
  gap: 4px;
}
[data-theme="dark"] .auth-modal__tabs { background: #3c3836; border-color: #57534e; }

.auth-modal__tab {
  flex: 1;
  padding: 11px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: none;
  color: #78716c;
  transition: all 0.2s ease;
}
.auth-modal__tab--active {
  background: #ffffff;
  color: #f97316;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
[data-theme="dark"] .auth-modal__tab--active { background: #292524; }

/* Form */
.auth-modal__form { display: flex; flex-direction: column; gap: 20px; }

.auth-field { display: flex; flex-direction: column; gap: 8px; }

.auth-field__label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1c1917;
}
[data-theme="dark"] .auth-field__label { color: #fafaf9; }

.auth-field__input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  background: #fef3e2;
  border: 2px solid #e7e5e4;
  border-radius: 14px;
  transition: all 0.2s ease;
  overflow: hidden;
}
[data-theme="dark"] .auth-field__input-wrap { background: #3c3836; border-color: #57534e; }

.auth-field__input-wrap:focus-within {
  border-color: #f97316;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(249,115,22,0.12);
}
[data-theme="dark"] .auth-field__input-wrap:focus-within { background: #292524; }

.auth-field__icon {
  position: absolute;
  left: 16px;
  color: #a8a29e;
  pointer-events: none;
  flex-shrink: 0;
}

.auth-field__input {
  width: 100%;
  padding: 15px 16px 15px 46px;
  background: none;
  border: none;
  font-size: 0.95rem;
  color: #1c1917;
  font-family: 'Poppins', sans-serif;
}
[data-theme="dark"] .auth-field__input { color: #fafaf9; }
.auth-field__input::placeholder { color: #a8a29e; }

.auth-field__eye {
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  color: #a8a29e;
  cursor: pointer;
  padding: 6px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.auth-field__eye:hover { color: #f97316; }

/* Submit button */
.auth-modal__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #ffffff;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 6px 24px rgba(249,115,22,0.45);
  transition: all 0.25s ease;
  margin-top: 8px;
  letter-spacing: 0.01em;
}
.auth-modal__submit:hover:not(:disabled) {
  box-shadow: 0 10px 32px rgba(249,115,22,0.6);
  transform: translateY(-2px);
}
.auth-modal__submit:active:not(:disabled) { transform: translateY(0); }
.auth-modal__submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

/* Switch link */
.auth-modal__switch {
  text-align: center;
  margin-top: 24px;
  font-size: 0.875rem;
  color: #78716c;
}
.auth-modal__switch button {
  background: none;
  border: none;
  color: #f97316;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}
.auth-modal__switch button:hover { color: #ea580c; }

/* Spinner */
.spin { animation: spin 0.8s linear infinite; display: inline-block; }
@keyframes spin { to { transform: rotate(360deg); } }

/* Mobile */
@media (max-width: 480px) {
  .auth-modal {
    padding: 36px 24px 32px;
    width: 94%;
    border-radius: 22px;
  }
  .auth-modal__title { font-size: 1.5rem; }
}

`;

const result = css.substring(0, s) + newCSS + css.substring(e);
fs.writeFileSync(p, result, "utf8");
console.log("Auth CSS replaced. New size:", fs.readFileSync(p).length);
