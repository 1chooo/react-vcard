export const handleItemClick = (
  value: string,
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>) => {
  setSelectedValue(value);
};

export const filterCategory = (selectedValue: string, data: any[]) => {
  return selectedValue === 'All'
    ? data
    : data.filter((item) => item.category.toLowerCase() === selectedValue.toLowerCase());
};


// src/utils/filterUtils.ts
export const handleBlogPaginationFilter = (
  tag: string,
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  handleItemClick(tag, setSelectedValue);
  setCurrentPage(1); // Reset to first page on filter change
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
};
