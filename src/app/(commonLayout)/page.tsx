import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.services";



export default async function Home() {
  const {data}= await userService.getSession()
  console.log(data)

  return (
    <div>
      <Button variant="outline" >Click Me</Button>
    </div>
  );
}
