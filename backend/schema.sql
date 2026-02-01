CREATE TABLE candidates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    experience INT,
    skills TEXT
);

CREATE TABLE evaluations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_id INT,
    crisis_management INT,
    sustainability INT,
    team_motivation INT,
    total_score INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE TABLE rankings (
    candidate_id INT PRIMARY KEY,
    rank_position INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);
