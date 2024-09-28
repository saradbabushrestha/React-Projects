import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./Components/SerachResults/SearchResult";
export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilteredData] = useState(null);
  const [selectedBtn, setselectedBtn] = useState("all");
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const respone = await fetch(BASE_URL);
        const json = await respone.json();
        setFilteredData(json);
        setLoading(false);
        setData(json);
      } catch (error) {
        setError("Unable to fecth data");
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);
  const searchFood = (e) => {
    const serachValue = e.target.value;
    console.log(serachValue);
    if (serachValue == "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(serachValue.toLowerCase())
    );
    setFilteredData(filter);
  };
  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setselectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setselectedBtn(type);
  };
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/newaa.png" alt="Top picture" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food..." />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: red;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: #7f2a1a;
      }
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 100px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 40px;
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#ff4343 " : "#7f2a1a")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};

  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
