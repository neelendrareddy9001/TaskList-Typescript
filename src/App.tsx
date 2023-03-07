import React, {useState} from 'react';
import { Note } from './models/Notes.Modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import NotesList from './components/NotesList';
import Header from './components/Header';
import CreateNotes from './components/CreateNotes';


function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id : (new Date).toString(),
    title : "Meeting",
    text : "Schedule meeting with UI/ UX Team",
    color : "#dfdfdf",
    date : (new Date).toString()
    
  }])

  
    return (

    <div className="App">
        <Header/>
        <Container className="mt-5">
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
