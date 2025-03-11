import React, { useState } from "react";
import EventHeader from "../components/EventHeader";
import EventList from "../components/EventList";

function EventsPage() {
    // Static events array
    const initialEvents = [
        { title: "Religious Gathering", date: "2025-03-15", location: "Singheshwar, Bihar", category: "Religious", description: "A spiritual gathering to celebrate community and culture." },
        { title: "Charity Drive", date: "2025-03-20", location: "Patna, Bihar", category: "Charity", description: "Fundraising event to support education for underprivileged children." },
        { title: "Social Meetup", date: "2025-03-25", location: "Darbhanga, Bihar", category: "Social", description: "A meetup to connect and share ideas within the community." },
        { title: "Health Camp", date: "2025-04-01", location: "Bhagalpur, Bihar", category: "Charity", description: "Free medical checkups and health awareness drives." },
        { title: "Cultural Festival", date: "2025-04-05", location: "Purnea, Bihar", category: "Social", description: "Experience the rich heritage and traditions of Bihar." },
        { title: "Spiritual Seminar", date: "2025-04-12", location: "Gaya, Bihar", category: "Religious", description: "Meditation and spiritual awakening session." }
    ];

    const [events, setEvents] = useState(initialEvents);
    const [filteredEvents, setFilteredEvents] = useState(initialEvents);
    const [filter, setFilter] = useState("");

    // Handle event filtering by category
    const handleFilter = (category) => {
        setFilter(category);
        if (category === "") {
            setFilteredEvents(events);
        } else {
            setFilteredEvents(events.filter((event) => event.category === category));
        }
    };

    // Add a new event (adds to static array)
    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
        if (!filter || filter === newEvent.category) {
            setFilteredEvents([...filteredEvents, newEvent]);
        }
    };

    return (
        <div>
            <EventHeader
                categories={["Religious", "Social", "Charity"]}
                onFilter={handleFilter}
                onAddEvent={addEvent}
            />

            <div className="container py-4">
                <h2 className="mb-4 text-center">Available Events</h2>
                <EventList events={filteredEvents} />
            </div>
        </div>
    );
}

export default EventsPage;
