export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  throw new Error("Wrong")

  return (
    <div>This is About component</div>
  )
}
