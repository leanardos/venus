import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const [payments, setPayments] = useState(null)
  const fetchData = async () => {
    const paymentData = await axios.get('http://localhost:8080/payments');
    const data = Object.keys(paymentData.data.data).map(payment => paymentData.data.data[payment])
    setPayments(data);
  }

  console.log(payments);

  const total = (payments) => {
    return payments?.reduce((total, {transaction_usd}) => total + transaction_usd, 0).toFixed(2)
  }
  console.log(total(payments));

  const totalOutgoings = (payments) => {
    return total(payments?.filter(payment => payment.transaction_usd < 0))
  }

  const totalIncoming = (payments) => {
    return total(payments?.filter(payment => payment.transaction_usd > 0))
  }

  console.log(totalOutgoings(payments))

  useEffect(() => {
    fetchData()
  }, []) // To stop runnin forever we have passed empty array here.
  return <Dashboard1 {...dashboard1Data} data-id="126:539:an-component-instance" />;
}

export default App;

function Dashboard1(props) {
  const {
    hiAndrei,
    title,
    sideBar2Props,
    stateDefaultTypeSearchIconProps,
    smallChartProps,
    smallNewClientsProps,
    smallEarningsProps,
    smallActivityProps,
    largeChartPerMonthProps,
    mediumUserProps,
    mediumChartProps,
    mediumTransactionsProps,
    mediumCalendarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard-1 screen" data-id="126:539">
        <div className="side-bar" data-id="126:547">
          <SideBar2 {...sideBar2Props} data-id="126:555:an-component-instance" />
        </div>
        <div className="flex-col" data-id="an|CKxTmUMf">
          <div className="flex-row" data-id="an|cgtE4ULl">
            <div className="flex-col-1" data-id="an|GChBGVC8">
              <div className="hi-andrei" data-id="126:541">
                {hiAndrei}
              </div>
              <h1 className="title" data-id="126:542">
                {title}
              </h1>
            </div>
            <StateDefaultTypeSearchIcon
              search={stateDefaultTypeSearchIconProps.search}
              data-id="126:540:an-component-instance"
            />
          </div>
          <div className="fill-here" data-id="126:543">
            <div className="frame-11" data-id="126:544">
              <SmallChart
                label={smallChartProps.label}
                cash={smallChartProps.cash}
                data-id="126:602:an-component-instance"
              />
              <SmallNewClients
                label={smallNewClientsProps.label}
                noClients={smallNewClientsProps.noClients}
                data-id="126:620:an-component-instance"
              />
              <SmallEarnings
                label={smallEarningsProps.label}
                cash={smallEarningsProps.cash}
                data-id="126:640:an-component-instance"
              />
              <SmallActivity
                label={smallActivityProps.label}
                cash={smallActivityProps.cash}
                data-id="126:648:an-component-instance"
              />
            </div>
            <div className="frame-1" data-id="126:545">
              <LargeChartPerMonth {...largeChartPerMonthProps} data-id="126:652:an-component-instance" />
              <MediumUser {...mediumUserProps} data-id="126:688:an-component-instance" />
            </div>
            <div className="frame-1" data-id="126:546">
              <MediumChart
                label={mediumChartProps.label}
                cash={mediumChartProps.cash}
                onTrack={mediumChartProps.onTrack}
                text1={mediumChartProps.text1}
                data-id="126:708:an-component-instance"
              />
              <MediumTransactions
                title={mediumTransactionsProps.title}
                name={mediumTransactionsProps.name}
                date={mediumTransactionsProps.date}
                cta={mediumTransactionsProps.cta}
                content1Props={mediumTransactionsProps.content1Props}
                data-id="126:766:an-component-instance"
              />
              <MediumCalendar {...mediumCalendarProps} data-id="126:744:an-component-instance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function SideBar2(props) {
  const {
    place,
    dashboard,
    dashboard2,
    logOut,
    frame17Props,
    frame172Props,
    frame173Props,
    frame174Props,
    frame175Props,
    frame176Props,
  } = props;

  return (
    <div className="side-bar-2" data-id="126:555">
      <div className="logo" data-id="I126:555;127:2645">
        <div className="icon-1" data-id="I126:555;127:2649">
          <img
            className="group-51"
            data-id="I126:555;127:2651"
            src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/group-51@2x.svg"
          />
        </div>
        <div className="text" data-id="I126:555;127:2646">
          <div className="place" data-id="I126:555;127:2648">
            {place}
          </div>
          <div className="dashboard" data-id="I126:555;127:2647">
            {dashboard}
          </div>
        </div>
      </div>
      <img
        className="line-16"
        data-id="I126:555;113:1784"
        src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/line-16@2x.svg"
      />
      <div className="frame-18" data-id="I126:555;113:1785">
        <div className="frame-16" data-id="I126:555;113:1786">
          <img
            className="icon"
            data-id="I126:555;113:1788"
            src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/icon-2@2x.svg"
          />
          <div className="dashboard-2" data-id="I126:555;113:1787">
            {dashboard2}
          </div>
        </div>
        <Frame17 activity={frame17Props.activity} data-id="I126:555;113:1789:an-component-instance" />
        <Frame17
          activity={frame172Props.activity}
          className={frame172Props.className}
          data-id="I126:555;113:1792:an-component-instance"
        />
        <Frame17
          activity={frame173Props.activity}
          className={frame173Props.className}
          data-id="I126:555;113:1795:an-component-instance"
        />
        <Frame17
          activity={frame174Props.activity}
          className={frame174Props.className}
          data-id="I126:555;113:1798:an-component-instance"
        />
        <Frame17
          activity={frame175Props.activity}
          className={frame175Props.className}
          data-id="I126:555;113:1801:an-component-instance"
        />
        <Frame17
          activity={frame176Props.activity}
          className={frame176Props.className}
          data-id="I126:555;113:1804:an-component-instance"
        />
      </div>
      <div className="frame-23" data-id="I126:555;113:1807">
        <img
          className="icon"
          data-id="I126:555;113:1809"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/icon-9@2x.svg"
        />
        <div className="log-out dmsans-medium-wild-blue-yonder-16px" data-id="I126:555;113:1808">
          {logOut}
        </div>
      </div>
    </div>
  );
}


function Frame17(props) {
  const { activity, className } = props;

  return (
    <div className={`frame-2 ${className || ""}`} data-id="I126:555;113:1789">
      <img
        className="icon-2"
        data-id="I126:555;113:1791"
        src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/icon-3@2x.svg"
      />
      <div className="activity dmsans-medium-wild-blue-yonder-16px" data-id="I126:555;113:1790">
        {activity}
      </div>
    </div>
  );
}


function StateDefaultTypeSearchIcon(props) {
  const { search } = props;

  return (
    <div className="large-input" data-id="126:540">
      <div className="overlap-group" data-id="an|ZA1BLFcj">
        <div className="ellipse-6" data-id="I126:540;10:573"></div>
        <img
          className="line-1"
          data-id="I126:540;10:574"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/line-1@2x.svg"
        />
      </div>
      <div className="search" data-id="I126:540;10:572">
        {search}
      </div>
    </div>
  );
}


function SmallChart(props) {
  const { label, cash } = props;

  return (
    <div className="small-chart" data-id="126:602">
      <div className="flex-col-2" data-id="an|ZWL0crIb">
        <div className="label dmsans-medium-wild-blue-yonder-14px" data-id="I126:602;113:1422">
          {label}
        </div>
        <div className="cash dmsans-bold-cloud-burst-24px" data-id="I126:602;113:1423">
          {cash}
        </div>
      </div>
      <div className="overlap-group5" data-id="an|H3G5ggXj">
        <div className="bar-7" data-id="I126:602;125:1113">
          <div className="overlap-group-2" data-id="an|Et9Tx5Fw">
            <div className="rectangle-17" data-id="I126:602;125:1114"></div>
            <div className="rectangle-18" data-id="I126:602;125:1115"></div>
          </div>
        </div>
        <div className="bar-6" data-id="I126:602;125:1116">
          <div className="overlap-group-1" data-id="an|Nh8DNGwB">
            <div className="rectangle-17" data-id="I126:602;125:1117"></div>
            <div className="rectangle-18-1" data-id="I126:602;125:1118"></div>
          </div>
        </div>
        <div className="bar-5" data-id="I126:602;125:1119">
          <div className="overlap-group-1" data-id="an|P1XWwnIJ">
            <div className="rectangle-17" data-id="I126:602;125:1120"></div>
            <div className="rectangle-18-2" data-id="I126:602;125:1121"></div>
          </div>
        </div>
        <div className="bar-4" data-id="I126:602;125:1122">
          <div className="overlap-group-1" data-id="an|pXeHEQJe">
            <div className="rectangle-17" data-id="I126:602;125:1123"></div>
            <div className="rectangle-18-3" data-id="I126:602;125:1124"></div>
          </div>
        </div>
        <div className="bar-3" data-id="I126:602;125:1125">
          <div className="overlap-group-1" data-id="an|HTopaoCA">
            <div className="rectangle-17" data-id="I126:602;125:1126"></div>
            <div className="rectangle-18-4" data-id="I126:602;125:1127"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


function SmallNewClients(props) {
  const { label, noClients } = props;

  return (
    <div className="small-new-clients" data-id="126:620">
      <div className="overlap-group-3" data-id="an|Ky2V7tWv">
        <img
          className="icon-3"
          data-id="I126:620;113:1404"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/icon@2x.svg"
        />
      </div>
      <div className="overlap-group6" data-id="an|IwR09mkD">
        <div className="label-1" data-id="I126:620;113:1400">
          {label}
        </div>
        <div className="no-clients" data-id="I126:620;113:1401">
          {noClients}
        </div>
        <img
          className="graph"
          data-id="I126:620;113:1405"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/graph@2x.svg"
        />
      </div>
    </div>
  );
}


function SmallEarnings(props) {
  const { label, cash } = props;

  return (
    <div className="small-earnings" data-id="126:640">
      <div className="icon-4" data-id="I126:640;113:1384">
        <img
          className="icon-5"
          data-id="I126:640;113:1386"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/icon-1@2x.svg"
        />
      </div>
      <div className="flex-col-3" data-id="an|Y5376Wnv">
        <div className="label-2 dmsans-medium-wild-blue-yonder-14px" data-id="I126:640;113:1382">
          {label}
        </div>
        <div className="cash-1 dmsans-bold-cloud-burst-24px" data-id="I126:640;113:1383">
          {cash}
        </div>
      </div>
    </div>
  );
}


function SmallActivity(props) {
  const { label, cash } = props;

  return (
    <div className="small-activity" data-id="126:648">
      <div className="overlap-group8" data-id="an|JzrhE9B1">
        <div className="label-3 valign-text-middle" data-id="I126:648;113:1418">
          {label}
        </div>
        <div className="overlap-group7" data-id="an|6qer8lqe">
          <div className="cash-2 valign-text-middle" data-id="I126:648;113:1419">
            {cash}
          </div>
          <img
            className="chart"
            data-id="I126:648;113:1420"
            src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/chart@2x.svg"
          />
        </div>
      </div>
    </div>
  );
}


function LargeChartPerMonth(props) {
  const { label, cash, price, name, feb, place, apr, name2, jun, jul, aug, sep, oct, nov, dec } = props;

  return (
    <div className="large-chart-per-month" data-id="126:652">
      <div className="flex-row-1" data-id="an|ah16Tmkh">
        <div className="flex-col-4" data-id="an|c3K2at9R">
          <div className="label-4 dmsans-medium-wild-blue-yonder-14px" data-id="I126:652;113:1631">
            {label}
          </div>
          <div className="cash-3 valign-text-middle dmsans-bold-cloud-burst-34px" data-id="I126:652;113:1632">
            {cash}
          </div>
        </div>
        <div className="button" data-id="I126:652;113:1600">
          <img
            className="barchart"
            data-id="I126:652;113:1601"
            src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/bar-chart@2x.svg"
          />
        </div>
      </div>
      <div className="overlap-group-4" data-id="an|Ih9mVe6p">
        <img
          className="chart-1"
          data-id="I126:652;113:1602"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/chart-1@1x.svg"
        />
        <div className="high-line" data-id="I126:652;113:1615">
          <img
            className="line-11"
            data-id="I126:652;113:1616"
            src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/line-11@1x.svg"
          />
          <div className="price valign-text-middle" data-id="I126:652;113:1617">
            {price}
          </div>
        </div>
      </div>
      <div className="months dmsans-medium-wild-blue-yonder-12px" data-id="I126:652;113:1618">
        <div className="name" data-id="I126:652;113:1619">
          {name}
        </div>
        <div className="months-item" data-id="I126:652;113:1620">
          {feb}
        </div>
        <div className="months-item" data-id="I126:652;113:1621">
          {place}
        </div>
        <div className="months-item" data-id="I126:652;113:1622">
          {apr}
        </div>
        <div className="months-item" data-id="I126:652;113:1623">
          {name2}
        </div>
        <div className="months-item" data-id="I126:652;113:1630">
          {jun}
        </div>
        <div className="months-item" data-id="I126:652;113:1624">
          {jul}
        </div>
        <div className="months-item" data-id="I126:652;113:1625">
          {aug}
        </div>
        <div className="months-item" data-id="I126:652;113:1626">
          {sep}
        </div>
        <div className="months-item" data-id="I126:652;113:1627">
          {oct}
        </div>
        <div className="months-item" data-id="I126:652;113:1628">
          {nov}
        </div>
        <div className="months-item" data-id="I126:652;113:1629">
          {dec}
        </div>
      </div>
    </div>
  );
}


function MediumUser(props) {
  const { avatar, name, newYorkUsa, number, projects, number2, followers, number3, following } = props;

  return (
    <div className="medium-user" data-id="126:688">
      <div className="overlap-group-5" data-id="an|sXqgtn7k">
        <div className="ellipse-46" data-id="I126:688;113:1048"></div>
        <img className="avatar" data-id="I126:688;113:1049" src={avatar} />
      </div>
      <div className="name-1 dmsans-bold-cloud-burst-24px" data-id="I126:688;113:1046">
        {name}
      </div>
      <div className="location" data-id="I126:688;113:1050">
        <img
          className="location-icon"
          data-id="I126:688;113:1053"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/location-icon@2x.svg"
        />
        <div className="new-york-usa dmsans-medium-wild-blue-yonder-14px" data-id="I126:688;113:1052">
          {newYorkUsa}
        </div>
      </div>
      <div className="flex-row-2" data-id="an|brL2nU8k">
        <div className="overlap-group3" data-id="an|3Bic3k9s">
          <div className="number dmsans-bold-cloud-burst-24px" data-id="I126:688;113:1063">
            {number}
          </div>
          <div className="projects dmsans-normal-wild-blue-yonder-12px" data-id="I126:688;113:1064">
            {projects}
          </div>
        </div>
        <div className="overlap-group2" data-id="an|5DqMlfDu">
          <div className="number-1 dmsans-bold-cloud-burst-24px" data-id="I126:688;113:1060">
            {number2}
          </div>
          <div className="followers dmsans-normal-wild-blue-yonder-12px" data-id="I126:688;113:1061">
            {followers}
          </div>
        </div>
        <div className="overlap-group1" data-id="an|WadEUQwH">
          <div className="number-2 dmsans-bold-cloud-burst-24px" data-id="I126:688;113:1057">
            {number3}
          </div>
          <div className="following dmsans-normal-wild-blue-yonder-12px" data-id="I126:688;113:1058">
            {following}
          </div>
        </div>
      </div>
    </div>
  );
}


function MediumChart(props) {
  const { label, cash, onTrack, text1 } = props;

  return (
    <div className="medium-chart" data-id="126:708">
      <div className="flex-row-3" data-id="an|2rZvCOL9">
        <div className="flex-col-5" data-id="an|s8Cc40o8">
          <div className="label-5 dmsans-medium-wild-blue-yonder-14px" data-id="I126:708;113:1246">
            {label}
          </div>
          <div className="cash-4 dmsans-bold-cloud-burst-34px" data-id="I126:708;113:1247">
            {cash}
          </div>
          <div className="on-track" data-id="I126:708;113:1251">
            <div className="frame-5-1" data-id="I126:708;113:1253">
              <img
                className="done"
                data-id="I126:708;113:1254"
                src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/done@2x.svg"
              />
            </div>
            <div className="on-track-1 valign-text-middle" data-id="I126:708;113:1252">
              {onTrack}
            </div>
          </div>
        </div>
        <div className="overlap-group-7" data-id="an|JFGCdqx1">
          <div className="text-1" data-id="I126:708;113:1249">
            {text1}
          </div>
          <img
            className="arrowdropup"
            data-id="I126:708;113:1250"
            src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/arrow-drop-up@2x.svg"
          />
        </div>
      </div>
      <div className="overlap-group7-1" data-id="an|HxBzZpvW">
        <div className="bar-7-1" data-id="I126:708;125:1152">
          <div className="overlap-group-6" data-id="an|md2M1Kit">
            <div className="rectangle-17-1" data-id="I126:708;125:1153"></div>
            <div className="rectangle-18-5" data-id="I126:708;125:1154"></div>
          </div>
        </div>
        <div className="bar-6-1" data-id="I126:708;125:1155">
          <div className="overlap-group-6" data-id="an|pxNeGBAy">
            <div className="rectangle-17-1" data-id="I126:708;125:1156"></div>
            <div className="rectangle-18-6" data-id="I126:708;125:1157"></div>
          </div>
        </div>
        <div className="bar-5-1" data-id="I126:708;125:1158">
          <div className="overlap-group-6" data-id="an|PBSnVa0x">
            <div className="rectangle-17-1" data-id="I126:708;125:1159"></div>
            <div className="rectangle-18-7" data-id="I126:708;125:1160"></div>
          </div>
        </div>
        <div className="bar-4-1" data-id="I126:708;125:1161">
          <div className="overlap-group-6" data-id="an|tPY6FsUx">
            <div className="rectangle-17-1" data-id="I126:708;125:1162"></div>
            <div className="rectangle-18-8" data-id="I126:708;125:1163"></div>
          </div>
        </div>
        <div className="bar-3-1" data-id="I126:708;125:1164">
          <div className="overlap-group-6" data-id="an|MtpmnU6o">
            <div className="rectangle-17-1" data-id="I126:708;125:1165"></div>
            <div className="rectangle-18-9" data-id="I126:708;125:1166"></div>
          </div>
        </div>
        <div className="bar-2" data-id="I126:708;125:1167">
          <div className="overlap-group5-1" data-id="an|uD6hzzb2">
            <div className="rectangle-17-1" data-id="I126:708;125:1168"></div>
            <div className="rectangle-18-10" data-id="I126:708;125:1169"></div>
          </div>
        </div>
        <div className="bar-1" data-id="I126:708;125:1170">
          <div className="overlap-group-6" data-id="an|8NwhCLV8">
            <div className="rectangle-17-1" data-id="I126:708;125:1171"></div>
            <div className="rectangle-18-11" data-id="I126:708;125:1172"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


function MediumTransactions(props) {
  const { title, name, date, cta, content1Props } = props;

  return (
    <div className="medium-transactions" data-id="126:766">
      <div className="title-1" data-id="I126:766;113:1066">
        {title}
      </div>
      <Content1 data-id="I126:766;113:1067:an-component-instance" />
      <div className="content2" data-id="I126:766;113:1074">
        <Icon data-id="I126:766;113:1075:an-component-instance" />
        <div className="overlap-group-8" data-id="an|3ck1DpA6">
          <div className="name-2 dmsans-bold-cloud-burst-16px" data-id="I126:766;113:1079">
            {name}
          </div>
          <div className="date dmsans-medium-wild-blue-yonder-12px" data-id="I126:766;113:1080">
            {date}
          </div>
        </div>
      </div>
      <Content1 className={content1Props.className} data-id="I126:766;113:1081:an-component-instance" />
      <div className="cta" data-id="I126:766;113:1088">
        <div className="cta-1 dmsans-bold-canary-16px" data-id="I126:766;113:1090">
          {cta}
        </div>
        <img
          className="keyboardbackspace"
          data-id="I126:766;113:1089"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/keyboard-backspace@2x.svg"
        />
      </div>
    </div>
  );
}


function Content1(props) {
  const { className } = props;

  return (
    <div className={`content1 ${className || ""}`} data-id="I126:766;113:1067">
      <Icon data-id="I126:766;113:1068:an-component-instance" />
      <div className="overlap-group-9" data-id="an|MPbf09b4">
        <div className="name-3 dmsans-bold-cloud-burst-16px" data-id="I126:766;113:1072">
          Public Transport
        </div>
        <div className="date-1 dmsans-medium-wild-blue-yonder-12px" data-id="I126:766;113:1073">
          22 September 2020
        </div>
      </div>
    </div>
  );
}


function Icon() {
  return (
    <div className="icon-6" data-id="I126:766;113:1068">
      <img
        className="directionsbus"
        data-id="I126:766;113:1070"
        src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/directions-bus@2x.svg"
      />
    </div>
  );
}


function MediumCalendar(props) {
  const { title, name, date, name2, date2, name3, date3, viewAllTasks } = props;

  return (
    <div className="medium-calendar" data-id="126:744">
      <div className="title-2 dmsans-bold-cloud-burst-34px" data-id="I126:744;113:1170">
        {title}
      </div>
      <div className="content1-1" data-id="I126:744;113:1152">
        <div className="rectangle-18-12" data-id="I126:744;113:1156"></div>
        <div className="overlap-group-10" data-id="an|3KJLgkVN">
          <div className="name-4 dmsans-bold-cloud-burst-16px" data-id="I126:744;113:1154">
            {name}
          </div>
          <p className="date-2 dmsans-medium-wild-blue-yonder-12px" data-id="I126:744;113:1155">
            {date}
          </p>
        </div>
      </div>
      <div className="content2-1" data-id="I126:744;113:1157">
        <div className="rectangle-18-12" data-id="I126:744;113:1161"></div>
        <div className="overlap-group-11" data-id="an|LJRiShsN">
          <div className="name-4 dmsans-bold-cloud-burst-16px" data-id="I126:744;113:1159">
            {name2}
          </div>
          <p className="date-2 dmsans-medium-wild-blue-yonder-12px" data-id="I126:744;113:1160">
            {date2}
          </p>
        </div>
      </div>
      <div className="content3-1" data-id="I126:744;113:1162">
        <div className="rectangle-18-12" data-id="I126:744;113:1166"></div>
        <div className="overlap-group-12" data-id="an|vjsKReEr">
          <div className="name-4 dmsans-bold-cloud-burst-16px" data-id="I126:744;113:1164">
            {name3}
          </div>
          <p className="date-2 dmsans-medium-wild-blue-yonder-12px" data-id="I126:744;113:1165">
            {date3}
          </p>
        </div>
      </div>
      <div className="cta-2" data-id="I126:744;113:1167">
        <div className="view-all-tasks dmsans-bold-canary-16px" data-id="I126:744;113:1169">
          {viewAllTasks}
        </div>
        <img
          className="keyboardbackspace-1"
          data-id="I126:744;113:1168"
          src="https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/keyboard-backspace@2x.svg"
        />
      </div>
    </div>
  );
}

const frame17Data = {
    activity: "Activity",
};

const frame172Data = {
    activity: "Library",
    className: "frame-3",
};

const frame173Data = {
    activity: "Security",
    className: "frame-4",
};

const frame174Data = {
    activity: "Schedules",
    className: "frame-5",
};

const frame175Data = {
    activity: "Payouts",
    className: "frame-6",
};

const frame176Data = {
    activity: "Settings",
    className: "frame",
};

const sideBar2Data = {
    place: "VENUS",
    dashboard: "DASHBOARD",
    dashboard2: "Dashboard",
    logOut: "Log Out",
    frame17Props: frame17Data,
    frame172Props: frame172Data,
    frame173Props: frame173Data,
    frame174Props: frame174Data,
    frame175Props: frame175Data,
    frame176Props: frame176Data,
};

const stateDefaultTypeSearchIconData = {
    search: "Search",
};

const smallChartData = {
    label: "Spent this month",
    cash: "$682.5",
};

const smallNewClientsData = {
    label: "New clients",
    noClients: "321",
};

const smallEarningsData = {
    label: "Earnings",
    cash: "$350.40",
};

const smallActivityData = {
    label: "Activity",
    cash: "$540.50",
};

const largeChartPerMonthData = {
    label: "Total Spent",
    cash: "$682.5",
    price: "$179",
    name: "Jan",
    feb: "Feb",
    place: "Mar",
    apr: "Apr",
    name2: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
};

const mediumUserData = {
    avatar: "https://anima-uploads.s3.amazonaws.com/projects/6173b8815fcca02fcc20efff/releases/6173ba2fb4fa9bd038c5d86c/img/avatar@2x.png",
    name: "Charles Robbie",
    newYorkUsa: "New York, USA",
    number: "28",
    projects: "Projects",
    number2: "643",
    followers: "Followers",
    number3: "76",
    following: "Following",
};

const mediumChartData = {
    label: "Spent this month",
    cash: "$682.5",
    onTrack: "On track",
    text1: "+2.45%",
};

const content12Data = {
    className: "content3",
};

const mediumTransactionsData = {
    title: "Your transactions",
    name: "Grocery Store",
    date: "18 September 2020",
    cta: "View all",
    content1Props: content12Data,
};

const mediumCalendarData = {
    title: "27 May",
    name: "Meet w/ Simmmple",
    date: "01:00 PM - 02:00 PM",
    name2: "Fitness Training",
    date2: "02:00 PM - 03:00 PM",
    name3: "Reading time",
    date3: "03:00 PM - 04:00 PM",
    viewAllTasks: "View all Tasks",
};

const dashboard1Data = {
    hiAndrei: "Hi Andrei,",
    title: "Welcome to Venus!",
    sideBar2Props: sideBar2Data,
    stateDefaultTypeSearchIconProps: stateDefaultTypeSearchIconData,
    smallChartProps: smallChartData,
    smallNewClientsProps: smallNewClientsData,
    smallEarningsProps: smallEarningsData,
    smallActivityProps: smallActivityData,
    largeChartPerMonthProps: largeChartPerMonthData,
    mediumUserProps: mediumUserData,
    mediumChartProps: mediumChartData,
    mediumTransactionsProps: mediumTransactionsData,
    mediumCalendarProps: mediumCalendarData,
};

