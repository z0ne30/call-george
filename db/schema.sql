CREATE TABLE inspections (
    id SERIAL PRIMARY KEY,
    property_address TEXT NOT NULL,
    property_type VARCHAR(50) NOT NULL,
    square_footage INTEGER NOT NULL,
    scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    cal_event_id VARCHAR(100),
    status VARCHAR(50) DEFAULT 'scheduled'
);