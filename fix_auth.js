const fs = require("fs");
const p = "foodRecipe/frontend/food-blog-app/src/index.css";
let css = fs.readFileSync(p, "utf8");

const oldStart = css.indexOf("/* ============================================================\n   AUTH MODAL");
const oldEnd   = css.indexOf("/* ============================================================\n   RECIPE DETAIL");

if (oldStart === -1 || oldEnd === -1) {
  console.error("Markers not found", oldStart, oldEnd);
  process.exit(1);
}

const newAuth = `/* ============================================================
   AUTH MODAL
   ============================================================ */
.auth-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
}
.auth-modal {
  position: fixed; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2001;
  width: 92%; max-width: 440px;
  max-height: 90vh; overflow-y: auto;
  background: var(--white);
  border-radius: 24px;
  box-shadow: 0 25px 80px rgba(0,0,0,0.25);
  padding: 40px 36px 36px;
  border: 1px solid var(--border);
}
.auth-modal::-webkit-scrollbar { width: 4px; }
.auth-modal::-webkit-scrollbar-thumb { background: var(--primary-light); border-radius: 4px; }
.auth-modal__close {
  position: absolute; top: 16px; right: 16px;
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--cream-dark); border: 1px solid var(--border);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary); transition: var(--transition); z-index: 1;
}
.auth-modal__close:hover { background: var(--border); color: var(--text-primary); transform: rotate(90deg); }
.auth-modal__header { text-align: center; margin-bottom: 28px; }
.auth-modal__logo {
  width: 64px; height: 64px; border-radius: 18px;
  background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.05));
  border: 2px solid rgba(249,115,22,0.25);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 18px;
  box-shadow: 0 8px 24px rgba(249,115,22,0.15);
}
.auth-modal__title {
  font-size: 1.65rem; font-weight: 800; color: var(--text-primary);
  margin-bottom: 8px; letter-spacing: -0.02em;
}
.auth-modal__subtitle { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; }
.auth-modal__tabs {
  display: flex; background: var(--cream-dark);
  border-radius: 50px; padding: 5px; margin-bottom: 28px;
  border: 1px solid var(--border);
}
.auth-modal__tab {
  flex: 1; padding: 10px 16px; border-radius: 50px;
  font-size: 0.9rem; font-weight: 600; border: none; cursor: pointer;
  background: none; color: var(--text-secondary); transition: var(--transition);
}
.auth-modal__tab--active { background: var(--white); color: var(--primary); box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.auth-modal__form { display: flex; flex-direction: column; gap: 18px; }
.auth-field { display: flex; flex-direction: column; gap: 7px; }
.auth-field__label { font-size: 0.875rem; font-weight: 700; color: var(--text-primary); }
.auth-field__input-wrap {
  position: relative; display: flex; align-items: center;
  background: var(--cream-dark); border: 2px solid var(--border);
  border-radius: 12px; transition: var(--transition);
}
.auth-field__input-wrap:focus-within {
  border-color: var(--primary); background: var(--white);
  box-shadow: 0 0 0 4px rgba(249,115,22,0.1);
}
.auth-field__icon { position: absolute; left: 14px; color: var(--text-muted); pointer-events: none; }
.auth-field__input {
  width: 100%; padding: 14px 14px 14px 44px;
  background: none; border: none; font-size: 0.95rem; color: var(--text-primary); border-radius: 12px;
}
.auth-field__input::placeholder { color: var(--text-muted); }
.auth-field__eye {
  position: absolute; right: 14px; background: none; border: none;
  color: var(--text-muted); cursor: pointer; padding: 4px;
  transition: var(--transition); display: flex; align-items: center;
}
.auth-field__eye:hover { color: var(--primary); }
.auth-modal__submit {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; padding: 15px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff; border: none; border-radius: 12px;
  font-size: 1rem; font-weight: 700; cursor: pointer;
  box-shadow: 0 6px 20px rgba(249,115,22,0.4);
  transition: var(--transition); margin-top: 6px;
}
.auth-modal__submit:hover:not(:disabled) { box-shadow: 0 8px 28px rgba(249,115,22,0.55); transform: translateY(-1px); }
.auth-modal__submit:disabled { opacity: 0.7; cursor: not-allowed; }
.auth-modal__switch { text-align: center; margin-top: 22px; font-size: 0.875rem; color: var(--text-secondary); }
.auth-modal__switch button { background: none; border: none; color: var(--primary); font-weight: 700; cursor: pointer; }
.auth-modal__switch button:hover { color: var(--primary-dark); }
.spin { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@media (max-width: 480px) {
  .auth-modal { padding: 32px 22px 28px; width: 95%; }
  .auth-modal__title { font-size: 1.4rem; }
}

`;

const result = css.substring(0, oldStart) + newAuth + css.substring(oldEnd);
fs.writeFileSync(p, result, "utf8");
console.log("Done. New size:", fs.readFileSync(p).length);
