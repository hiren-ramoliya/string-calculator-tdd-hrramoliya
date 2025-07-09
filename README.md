# 📌 String Calculator TDD – Node.js + Jest

This repository contains an implementation of the **String Calculator**, following **Test-Driven Development (TDD)** using **Node.js** and **Jest**.
Each feature was developed through a cycle of failing test → code → refactor, and is accompanied by clean, readable code and meaningful commit history.

---

## 🚀 Features Implemented

| ✅ Feature                                                 | 🧪 Example Input | 🎯 Expected Output                            |
| ---------------------------------------------------------- | ---------------- | --------------------------------------------- |
| Return `0` for empty string                                | `""`             | `0`                                           |
| Return value for a single number                           | `"7"`            | `7`                                           |
| Return sum of two numbers                                  | `"3,6"`          | `9`                                           |
| Return sum of multiple comma-separated numbers             | `"2,1,4,5"`      | `12`                                          |
| Handle newline (`\n`) as a delimiter along with commas     | `"3\n2,4"`       | `9`                                           |
| Support custom delimiter (e.g. `;`) using `"//;\n"` syntax | `"//;\n4;8"`     | `12`                                          |
| Throw error if input contains a negative number            | `"4,-3"`         | Error: `negative numbers not allowed: -3`     |
| Throw error listing all negative numbers                   | `"4,-3,-4"`      | Error: `negative numbers not allowed: -3, -4` |

---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/string-calculator-tdd.git
cd string-calculator-tdd
```
