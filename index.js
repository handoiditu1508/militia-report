const allNamesString = `
Lộc
Thành
Lợi
An
Thạch
Long
Minh
Kiệt
Hiếu
Danh
Đạt
Thịnh
Tùng
Dũng
Thắng
Khôi lớn
Nghĩa
Đại
Khiêm
Phúc
Phong
Tú
Thông
Khôi nhỏ
Tài
Thành nhỏ
Thông nhỏ
Trường
Tuyển
`;

const excludedNamesString = `
Thành
Thạch
Minh
Kiệt
Đạt
Khôi lớn
Khiêm
Thông
Khôi nhỏ
Tài
`;

const selectedNamesString = `
Long
Tuyển
Đại
Phúc
Trường
Danh
An
Thịnh
Dũng
Tú
Lợi
Nghĩa
`;

const allNames = allNamesString.trim().split(/\r?\n/).filter(Boolean);
const excludedNames = excludedNamesString.trim().split(/\r?\n/).filter(Boolean);
const selectedNames = selectedNamesString.trim().split(/\r?\n/).filter(Boolean);

const outputNames = allNames.filter(name => !excludedNames.includes(name) && !selectedNames.includes(name));
const duplicatedNames = selectedNames.filter(name => excludedNames.includes(name));

console.log("Output names: \n[");
for (const name of outputNames) {
  console.log(name);
}
console.log("]\n");

console.log(`Output names count: ${outputNames.length}`);
console.log("\n");

console.log("Duplicated names: \n[")
for (const name of duplicatedNames) {
  console.log(name);
}
console.log("]\n");
