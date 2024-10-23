'use client'

import ButtonCard from "@/components/button-card/button-card";
import SearchBar from "@/components/search-bar/search-bar";
import './styles.scss';
import Button from "@/components/button/button";
import ButtonCalendar from "@/components/calendar/button-calendar";
import Profile from "@/components/profile/profile";

import vish from '@/public/vish.jpg'
import SearchResults from "@/components/search-results/search-results";
import { useState } from "react";
import { SearchContext } from "@/context/SearchContext";

export default function Home() {
  // 1: on start get current date to display on calendar card.
  // 2: fetch data from that date.
  // 3: add data to different card elements.
  // 4: search - on edit text, hide card buttons and show search results.
  const [searchResults, setSearchResults] = useState('')
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return { day, month };
  }

  // const getFakeData = (searchText: string) => {
  //   let items = [
  //     { title: 'John Bennette', subTitle: '+230 5123 4567', type: 'clients' },
  //     { title: 'Test', subTitle: '+230 5123 4567', type: 'products' }
  //   ];
  //   let data = items.filter(item => item?.title.includes(searchText));

  //   console.log('Item: ', data);


  //   return data;
  //   // return items.filter(item => item?.title.includes(searchText));
  // }

  let test = [
    { title: 'John Bennette', subTitle: '+230 5123 4567', type: 'clients' },
    { title: 'Test', subTitle: '+230 5123 4567', type: 'products' }
  ]
  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults
      }}>
      <main className="main-content">
        <div className="top-bar">
          <div className="menu-bar">
            <h3>Dashboard</h3>

            <Profile
              name="Vishroy"
              imgUrl={vish} />
          </div>
          <div>
            <SearchBar
              hintText="Search" />
          </div>
        </div>


        <div className="container">
          {
            (searchResults.length >= -1) ? (
              <SearchResults test={searchResults}
              />
            ) : (
              <>
                <ButtonCalendar
                  date={getDate()} />

                <div className="overview">
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <ButtonCard
                      title="Clients"
                      iconName="account_circle"
                      numNew="3"
                      numNewTxt="newly recorded"
                      numTotal="200"
                      numTotalTxt="total registered" />

                    <Button
                      title="Catalogs"
                      iconName="import_contacts"
                      type="rounded"
                      titleBold={false}
                    />
                  </div>


                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <ButtonCard
                      className="yellow"
                      title="Products"
                      iconName="inventory_2"
                      numNew="6"
                      numNewTxt="newly recorded"
                      numTotal="550"
                      numTotalTxt="product type" />
                    <Button
                      title="Invoices"
                      iconName="description"
                      type="rounded"
                      titleBold={false}
                    />
                  </div>
                </div>
              </>
            )
          }

        </div>
      </main >
    </SearchContext.Provider>
  );
}

