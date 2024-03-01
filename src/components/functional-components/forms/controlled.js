import { useState } from "react";

var array=[];
const Controlled = () => {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [genderError, setGenderError] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');

  const usernameHandler = (event) => {
    let uname = event.target.value;
    setUsername(uname);
    if (uname.length === 0) {
      setUsernameError("Field cannot be empty");
    } else if (uname.length < 7) {
      setUsernameError("Username should contain at least 7 letters");
    } else {
      setUsernameError(null);
    }
  };

  const emailHandler = (event) => {
    let mailId = event.target.value;
    setEmail(mailId);
    if (mailId.length === 0) {
      setEmailError('This field cannot be empty');
    } else {
      setEmailError(null);
    }
  }

  const mobileNumberHandler = (event) => {
    let mobileNum = event.target.value;
    setMobileNumber(mobileNum);
    if (!mobileNum.match(/^[6-9]\d{9}$/)) {
      setMobileNumberError("Mobile number must start with 6, 7, 8, or 9 and be 10 digits long");
    } else {
      setMobileNumberError(null);
    }
  };

  const genderHandler = (event) => {
    let gender = event.target.value;
    setGender(gender);
    if (gender === null) {
      setGenderError("Please select your Gender");
    } else {
      setGenderError(null)
    }
  }

  const passwordHandler = (event) => {
    let pwd = event.target.value;
    setPassword(pwd);
    if (pwd.length === 0) {
      setPasswordError("This field cannot be empty");
    } else if (pwd.length < 10) {
      setPasswordError("The password must contain at least 10 characters");
    } else {
      setPasswordError(null);
    }
  };

  const confirmPasswordHandler = (event) => {
    let cpass = event.target.value;
    setConfirmPassword(cpass);
    if (password !== cpass) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError(null)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gender === null) {
      setGenderError('Gender is required');
    }
    if (username.length >= 7 && password.length >= 10) {
      const obj = {
        username: username,
        email: email,
        mobile_number: `+91${mobileNumber}`,
        DOB: `${dobDay}-${dobMonth}-${dobYear}`,
        gender: gender,
        password: password,
      };
      array.push(obj)
      localStorage.setItem("users", JSON.stringify(array));
      console.log(array);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setMobileNumber("");
      setDobDay("");
      setDobMonth("");
      setDobYear("");
      setGender('');
    }
  };

  const getDays = () => {
    let days = [];
    for (let i = 0; i < 31; i++) {
      days.push({ day: i + 1 })
    }
    return days;
  }

  const getMonths = () => {
    let months = [];
    for (let i = 0; i < 12; i++) {
      months.push({ month: i + 1 })
    }
    return months
  }

  const getYears = () => {
    var currentYear = new Date().getFullYear();
    var years = [];
    for (let i = currentYear; i > 1999; i--) {
      years.push({ year: i });
    }
    return years;
  }

  return (
    <>
      <h1>Controlled Component</h1>
      <div style={{ margin: "2rem" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <div>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={usernameHandler}
              style={{
                border: usernameError ? "1px solid red" : null,
                outline: usernameError ? "1px solid red" : null,
              }}
            />
            {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              onChange={emailHandler}
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          </div>
          <div>
            <input type="radio" name="gender" value="male" onChange={genderHandler} /> Male &nbsp;
            <input type="radio" name="gender" value="female" onChange={genderHandler} /> Female &nbsp;
            {genderError && <p style={{ color: "red" }}>{genderError}</p>}
          </div>
          <div>
            <label>Date of Birth</label><br />
            <select style={{ marginRight: "10px" }} value={dobDay} onChange={(event) => { setDobDay(event.target.value) }}>
              <option value="day">Day</option>
              {getDays().map(each => <option value={each.day} key={each.day}>{each.day}</option>)}
            </select>
            <select style={{ marginRight: "10px" }} value={dobMonth} onChange={(e) => setDobMonth(e.target.value)}>
              <option value="month">Month</option>
              {getMonths().map(each => <option key={each.month} value={each.month}>{each.month}</option>)}
            </select>
            <select style={{ marginRight: "10px" }} value={dobYear} onChange={(e) => setDobYear(e.target.value)} >
              <option value="year">Year</option>
              {getYears().map((each) => <option key={each.year}>{each.year}</option>)}
            </select>
          </div>
          <div>
            <input
              type="tel"
              name="mobileNumber"
              value={mobileNumber}
              placeholder="Enter your Mobile Number"
              onChange={mobileNumberHandler}
            />
            {mobileNumberError && <p style={{ color: "red" }}>{mobileNumberError}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={passwordHandler}
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={confirmPasswordHandler}
            />
            {confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p>}
          </div>
          <button type="submit" style={{ width: "11.85rem" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Controlled;
