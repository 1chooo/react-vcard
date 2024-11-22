import type { Post } from "@/types/post";

const months: [string, ...string[]] = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec"
];

export const getDateObject = (dateStr: string): Date => {
  if (dateStr.length < 1) {
    throw new Error(`Invalid dateStr: ${dateStr}!`);
  }
  if (!/\w{3}, \d{1,2}, \d{4}/.test(dateStr)) {
    throw new Error(`Invalid dateStr: ${dateStr}!`);
  }
  const [month, day, year] = dateStr.split(", ");

  //validate month
  if (!months.includes(month)) {
    throw new Error(`Invalid month in ${dateStr}!`);
  }

  //validate day
  if (parseInt(day) < 1 || parseInt(day) > 31) {
    throw new Error(`Invalid day in ${dateStr}!`);
  }

  const isLeapYear = (year: number): boolean => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };

  //validate day according to month and year
  if (
    (isLeapYear(parseInt(year)) && month === "Feb" && parseInt(day) > 29) ||
    (month === "Feb" && parseInt(day) > 28) ||
    (["Apr", "Jun", "Sep", "Nov"].includes(month) && parseInt(day) > 30)
  ) {
    throw new Error(`Invalid day in ${dateStr}!`);
  }

  const formattedDateStr = `${year}-${months.indexOf(month) + 1}-${day}`;   // Safari still doesn't support yyyy-mm-dd format
  const date = new Date(formattedDateStr);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date in ${dateStr}!`);
  }

  return date;
};

// Ascend Blog by date
export function ascendBlogByDate(
  postsData: Post[]
): Post[] {
  return postsData.sort((
    a: Post,
    b: Post
  ): number => {
    try {
      const dateA = getDateObject(a.date);
      const dateB = getDateObject(b.date);

      // Compare years first
      if (dateA.getFullYear() !== dateB.getFullYear()) {
        return dateA.getFullYear() - dateB.getFullYear();
      }
      
      // Compare months next
      if (dateA.getMonth() !== dateB.getMonth()) {
        return dateA.getMonth() - dateB.getMonth();
      }
      
      // Compare days last
      return dateA.getDate() - dateB.getDate();
    } catch (error) {
      console.trace(error);
      return 0;
    }
  });
}


// Descend Blog by date
export function descendBlogByDate(
  postsData: Post[]
): Post[] {
  return postsData.sort((
    a: Post,
    b: Post
  ): number => {
    try {
      const dateA = getDateObject(a.date);
      const dateB = getDateObject(b.date);

      // Compare years first
      if (dateB.getFullYear() !== dateA.getFullYear()) {
        return dateB.getFullYear() - dateA.getFullYear();
      }
      
      // Compare months next
      if (dateB.getMonth() !== dateA.getMonth()) {
        return dateB.getMonth() - dateA.getMonth();
      }
      
      // Compare days last
      return dateB.getDate() - dateA.getDate();
    } catch (error) {
      console.trace(error);
      return 0;
    }
  });
}
