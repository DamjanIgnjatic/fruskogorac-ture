type formatDateProps = {
  date: Date;
  locale?: string;
};

export const formatDate = ({
  date,
  locale = "sr-Latn-RS",
}: formatDateProps) => {
  const month = date.toLocaleString(locale, { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const dayText = date.toLocaleDateString(locale, { weekday: "long" });

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padEnd(2, "0");

  const formattedDate = `${
    dayText.charAt(0).toUpperCase() + dayText.slice(1)
  } - ${day}. ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;
  const formattedTime = `${hours} : ${minutes}`;

  return { formattedDate, formattedTime };
};
