import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";



export default async function Home() {

  return (
    <div>
      <Button variant="outline" >Click Me</Button>
    </div>
  );
}
