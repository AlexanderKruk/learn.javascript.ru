var styles = ["Джаз","Блюз"];
console.log(styles);
styles.push("Рок-н-Ролл");
console.log(styles);
styles[styles.length - 2] = "Классика"
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Рэп", "Рэгги");
console.log(styles);