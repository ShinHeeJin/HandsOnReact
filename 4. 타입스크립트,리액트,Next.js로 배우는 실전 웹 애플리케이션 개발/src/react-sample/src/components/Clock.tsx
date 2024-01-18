import { useState, useEffect } from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  KR = "ko-KR",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.KR:
      return Locale.KR;
    default:
      return Locale.US;
  }
};

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    console.log("set timer");
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);

    // 클린업 함수를 전달하고, 언마운트 시에 타이머를 해제한다.
    return () => {
      clearInterval(timer);
    };
  }, []); // 초기 렌더링시에만 실행한다.

  // 로컬 스토리지에서 값을 로딩, 이는 동기적으로 실행되는데 데이터가 커짐에 따라 시간이 걸린다.
  // 렌더링 과정에서 해당 로직을 수행하면 렌더링이 지연되기 때문에 useEffect안에서 로컬 스토리지를 사용한다.
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    console.log(`load locale from storage, savedLocale : ${savedLocale}`);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  // 로케일이 바뀌었을 때 로컬 스토리지에 값을 저장
  useEffect(() => {
    console.log("update locale to storage");
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]); // 렌더링 될때마다 저장할 필요는 없고 option이 변경될 때만 업데이트 되면 되므로 locale을 의존한다.

  console.log("render complete");
  return (
    <div>
      <p>
        <span>현재시각</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </p>
    </div>
  );
};

export default Clock;
