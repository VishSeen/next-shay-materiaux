'use client'

import ButtonFab from "@/components/button-fab/button-fab";
import TopBar from "@/components/top-bar/top-bar";
import './styles.scss';
import InfoCard from "@/components/info-card/info-card";
import { useState } from "react";
import { SearchContext } from "@/context/SearchContext";
import { useRouter } from "next/navigation";
import TableFilter, { TabItem } from "@/components/table/table-filter/table-filter";
import TableList from "@/components/table/table-list/table-list";
import { appRoutes } from "@/constants/routes/app-routes";



export default function Clients() {
  const [searchResults, setSearchResults] = useState('')
  const [slug, setSlug] = useState<string>('vishroy');
  const [isInfo, setIsInfo] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const router = useRouter()

  const data = [
    {
      title: 'John Snow',
      brn: '#12234555',
      address: 'Kalimaye st, Calebasses',
      tel: '+23051234567',
      shop: 'Good Shop'
    },
  ]

  const tabGroup: TabItem[] = [
    {
      title: 'All',
      clickHandle: () => alert('test')
    },
    {
      title: 'Paid',
      clickHandle: () => alert('Paid')
    }
  ]

  const handleTableClick = () => {
    setIsInfo(!isInfo);
  }

  return (
    <SearchContext.Provider value={{
      searchResults,
      setSearchResults
    }}>
      <div className="page-clients">
        <TopBar
          leftIcon="arrow_back"
          redirectBackLink="/"
          title="Clients"
          hasSearch={true} />

        <section>
          <InfoCard
            route={slug}
            type="clients"
            infoContents={data}
            isInfo={isInfo} />
        </section>

        <section className="main-content">
          <TableFilter tabItems={tabGroup} />
          <TableList click={handleTableClick} />
        </section>

        <ButtonFab
          icon={"add"}
          type={"normal"}
          clickHandler={() => router.push(appRoutes.clients.new)} />
      </div>
    </SearchContext.Provider>
  )
}