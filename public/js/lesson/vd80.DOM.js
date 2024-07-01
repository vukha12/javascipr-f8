function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  let selectorRules = {};

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    let errorMessage;
    let errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);

    // Lấy qua các rules của selector
    let rules = selectorRules[rule.selector];

    // Lặp qua từng rule và kiểm tra
    // Nếu có lỗi thì dừng việc kiểm tra
    for (let i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);

      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }

    return !errorMessage;
  }

  // Lấy element form cần validate
  let formElement = document.querySelector(options.form);
  if (formElement)
    formElement.onsubmit = function (element) {
      element.preventDefault();

      let isFormValid = true;

      // Lặp qua từng rules và validate
      options.rules.forEach((rule) => {
        let inputElement = formElement.querySelector(rule.selector);
        let isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onsubmit === "function") {
          let enableInputs = formElement.querySelectorAll("[name]");
          let formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});

          options.onSubmit(formValues);
        } else {
          formElement.submit();
        }
      }
    };

  // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input,,...)
  options.rules.forEach((rule) => {
    //Lưu lại các rules cho mỗi input
    if (Array.isArray(selectorRules[rule.selector])) {
      selectorRules[rule.selector].push(rule.test);
    } else {
      selectorRules[rule.selector] = [rule.test];
    }
    let inputElement = formElement.querySelector(rule.selector);
    if (inputElement) {
      // Xử lý trường hợp blur khỏi input
      inputElement.onblur = () => {
        validate(inputElement, rule);
      };

      // Xử lý mỗi khi người dùng nhập vào input
      inputElement.oninput = () => {
        let errorElement = inputElement.parentElement.querySelector(
          options.errorSelector
        );
        errorElement.innerText = "";
        inputElement.parentElement.classList.remove("invalid");
      };
    }
  });
}

//Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra messae lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này!";
    },
  };
};
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
  };
};

Validator.minLenght = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui long nhập tối thiểu ${min} ký tự`;
    },
  };
};

Validator.checkPassword = function (selector, getPassword, messae) {
  return {
    selector: selector,
    test: function (value) {
      return value === getPassword()
        ? undefined
        : messae || `Giá trị nhập vào chưa khớp`;
    },
  };
};
