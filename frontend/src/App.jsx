import {
  Container,
  Title,
  Table,
  Card,
  Text,
  SimpleGrid,
} from "@mantine/core";
import candidates from "./data/candidates.json";

// calculate total score
const totalScore = (c) => c.crisis + c.sustainability + c.motivation;

// heatmap color helper
const heatColor = (score) => {
  if (score >= 85) return "#c8f7c5"; // green
  if (score >= 70) return "#fff3bf"; // yellow
  return "#f7c5c5"; // red
};

export default function App() {
  const sorted = [...candidates].sort(
    (a, b) => totalScore(b) - totalScore(a)
  );

  return (
    <Container size="lg" mt="md">
      {/* ================= LEADERBOARD ================= */}
      <Title order={2} mb="sm">
        Top 10 Candidates
      </Title>

      <Table striped highlightOnHover withBorder mb="xl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {sorted.slice(0, 10).map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{totalScore(c)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ================= SKILL HEATMAP ================= */}
      <Title order={2} mb="sm">
        Skill Heatmap
      </Title>

      <Table withBorder mb="xl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Crisis</th>
            <th>Sustainability</th>
            <th>Motivation</th>
          </tr>
        </thead>
        <tbody>
          {sorted.slice(0, 5).map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td style={{ backgroundColor: heatColor(c.crisis) }}>
                {c.crisis}
              </td>
              <td style={{ backgroundColor: heatColor(c.sustainability) }}>
                {c.sustainability}
              </td>
              <td style={{ backgroundColor: heatColor(c.motivation) }}>
                {c.motivation}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ================= CANDIDATE CARDS ================= */}
      <Title order={2} mb="sm">
        Candidate Profiles
      </Title>

      <SimpleGrid cols={3}>
        {sorted.map((c) => (
          <Card key={c.id} shadow="sm" padding="md" withBorder>
            <Text fw={600}>{c.name}</Text>
            <Text size="sm">Experience: {c.experience} years</Text>
            <Text size="sm">
              Skills: {c.skills.join(", ")}
            </Text>
            <Text size="sm" mt="xs">
              Total Score: {totalScore(c)}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
