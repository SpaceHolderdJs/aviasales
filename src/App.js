import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidenav from "./components/Sidenav";
import Nav from "./components/Nav";
import Loader from "./components/Loader";
import Card from "./components/Card";
import axios from "axios";
import "./App.css";
import "./animations.css";

function App() {
  const dispatch = useDispatch();
  const id = useSelector((store) => store.id);
  const transfer = useSelector((store) => store.transfer);
  const tickets = useSelector((store) => store.tickets);
  const pref = useSelector((store) => store.pref);

  const [filteredTickets, setFilteredTickets] = useState([...tickets]);

  const [theme, setTheme] = useState({ background: "white" });

  useEffect(() => {
    setFilteredTickets([...tickets]);
  }, [tickets]);

  useEffect(() => {
    switch (transfer) {
      case "all":
        setFilteredTickets(tickets);
        break;
      case "no":
        setFilteredTickets(
          tickets.filter((ticket) =>
            ticket.segments.every((segment) => segment.stops.length < 1)
          )
        );
        break;
      case "t1":
        setFilteredTickets(
          tickets.filter((ticket) =>
            ticket.segments.every((segment) => segment.stops.length === 1)
          )
        );
        break;
      case "t2":
        setFilteredTickets(
          tickets.filter((ticket) =>
            ticket.segments.every((segment) => segment.stops.length === 2)
          )
        );
        break;
      case "t3":
        setFilteredTickets(
          tickets.filter((ticket) =>
            ticket.segments.every((segment) => segment.stops.length === 3)
          )
        );
        break;

      default:
        setFilteredTickets(tickets);
    }
  }, [transfer]);

  useEffect(() => {
    switch (pref) {
      case "cheapest":
        setFilteredTickets([
          ...filteredTickets.sort((t1, t2) => t1.price - t2.price),
        ]);
        break;

      case "fastest":
        setFilteredTickets([
          ...filteredTickets.sort(
            (t1, t2) => t1?.segments[0].duration - t2?.segments[0].duration
          ),
        ]);
        break;

      case "optimal":
        setFilteredTickets([...tickets]);
        break;

      default:
        setFilteredTickets([...filteredTickets]);
    }
  }, [pref]);

  const getTickets = useCallback(() => {
    axios
      .get(`https://front-test.beta.aviasales.ru/search`)
      .then((response) => {
        dispatch({ type: "INIT_ID", payload: response.data.searchId });
        return response.data.searchId;
      })
      .then((id) =>
        axios
          .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
          .then((response) => {
            console.log(response);
            dispatch({ type: "INIT_TICKETS", payload: response.data.tickets });
          })
      );
  }, []);

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className="app column centered" style={theme}>
      <img src="/logo.png" alt="logo" />
      <div className="row">
        <Sidenav />
        <div className="column">
          <Nav />
          <div className="column card-wrapper">
            {tickets?.length > 0 &&
              filteredTickets.map((ticket) => <Card ticket={ticket} />)}
          </div>
          {tickets.length < 1 && <Loader />}
        </div>
      </div>
      <div className="row centered">
        <div
          className="circle shadow"
          style={{ background: "white" }}
          onClick={() => setTheme({ background: "white" })}></div>
        <div
          className="circle shadow"
          style={{ background: "grey" }}
          onClick={() =>
            setTheme({ background: "rgb(100,100,100)", color: "white" })
          }></div>
        <div
          className="circle shadow"
          style={{ background: "linear-gradient(40deg, blue, purple)" }}
          onClick={() =>
            setTheme({
              background: "linear-gradient(40deg, blue, purple)",
              color: "white",
            })
          }></div>
      </div>
    </div>
  );
}

export default App;
