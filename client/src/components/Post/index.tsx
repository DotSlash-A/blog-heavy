import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "react-router";

import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "./style.css";

export default function index() {
  // const params = useParams();
  const { id } = useParams();
  console.log(id);

  const markdown = `
  Well in order to setup a remote environment, you need a DigitalOcean account, you can use my referral code below to get $100 for 60 days just to try these things out 👇

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=34d6c62184bd&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

After you're done creating an account, let's move to the next step

### **Creating a Droplet**

* On the left menu, click on the Droplet button
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771113903/0fbf7ca3-4416-4414-b5c2-bf5d50d6603d.png)
    
* Create a new droplet by clicking on the \`"Create Droplet"\` buton
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771156358/e86c5498-3ea1-4f6a-92dc-757137bfb5b3.png)
    
* Choose a distro of your flavour (I choose Ubuntu for ease of use) and select your desired specs
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771189480/eca24958-a81b-409b-9530-2b76f7d60629.png)
    
* Select the datacenter region closest to you for better latency
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771224742/38ec2547-2c0a-49f9-b4a7-baf07c0c7773.png)
    

For Authentication, choose SSH keys and click on the \`"New SSH Key"\` button below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771254739/b0dcdda0-27ae-4fd1-aedc-a1a24bc85a08.png)

> Use the command \`ssh-keygen\` to generate an SSH key, and the file would be stored under \`~/.ssh/id_rsa.pub\` (for Mac and Linux) and \`C:\<user_name>\.ssh\id_rsa.pub\` (for Windows)

**NOTE:** The command \`ssh-keygen\` might not work on Windows CMD or Powershell, use [Git Bash](https://git-scm.com/download/win)

* Finally, click on \`"Create Droplet"\` at the bottom and wait for a few minutes for it to spin up
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771919003/f4204367-60c9-4af6-9a76-c02e72440f86.png)
    

### **Connecting to droplet via SSH**

* Copy the IP address
    
* Go to your terminal, and type 👉 \`ssh root@<IP_ADDRESS>\`
    
    * Example 👉 \`ssh root@127.0.0.1\`
        
* Once inside the Droplet, create a new \`sudo\` user
    
    * Create a new user 👉 \`adduser vscode\`
        
    * Add it to \`sudo\` group 👉 \`usermod -aG sudo vscode\`
        
        ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684771955025/efe316fa-d64c-4f11-b167-e0573688cafa.png)
        
    * Login as the user 👉 \`su - vscode\`
        
        ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772038088/2302c985-91e7-4cfc-9e34-dde82f8bc3f2.png)
        
    * Create a new \`ssh\` directory 👉 \`mkdir ~/.ssh\`
        
    * Create a new file inside it 👉 \`touch ~/.ssh/authorized_keys\`
        
    * Copy the contents of \`id_rsa.pub\` file, present on your local PC and paste it inside the \`authorized_keys\` file you created on your Droplet
        
        * To paste the contents into \`authorized_keys\` file, you can use any cli based text editor, \`nano\` example below 👇
            
            ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772119117/d13549be-fd1c-445a-9cec-34a0c63bda8b.png)
            
        * Press **Ctrl-X**, then **Y** and then **Enter** to save the file
            
    * \[OPTIONAL\] Type \`chmod 600 ~/.ssh/authorized_keys\` to make sure other users don't access this file
        
* Press **Ctrl-D** twice to logout from the Droplet and test ssh connection of this new user \`vscode\`
    
* Type \`ssh vscode@<IP_ADDRESS>\` to connect to your Droplet, but now as the user \`vscode\` instead of \`root\`
    

### **VS Code Remote development**

* Add the [**Remote - SSH** extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) to VS Code
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772200301/69fd82fc-f9f1-413b-a857-46a52d45e5a4.png)
    
* Go to VS Code, click on the bottom left button
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772231660/c85bf98e-1c28-447d-8f79-59cb0959cb65.png)
    
* Choose **Connect to host**
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772262613/9ce07d3e-52eb-49aa-9b30-61843bb2ecb5.png)
    
* Type in \`ssh vscode@<IP_ADDRESS>\`
    
* Choose your \`ssh\` folder
    
* Then you can connect to your Droplet for remote development
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772317609/e96b000d-6d2e-49ba-b53b-cc0ea3aa5b3d.png)
    
* A new window will open, with remote connection to your Drop
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684772344567/88f22fe6-d677-4fc0-b903-d6833fb6cec7.png)
    

Now, you can make use of the VMs resources to build applications on the cloud
  `;

  return (
    <>
      <div className="container mx-auto mt-40 max-w-5xl">
        <div className="">
          <p className="font-sans text-xl text-slate-500 my-5">
            Article - Getting Started
          </p>
          <h1 className="font-sans text-5xl font-bold text-white">
            Welcome to Ghost
          </h1>

          <Alert className="bg-dark text-white border-0">
            <div className="flex flex-row">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>

              <div className="flex flex-col ml-2">
                <AlertTitle>Michu</AlertTitle>
                <AlertDescription>03 October 2023</AlertDescription>
              </div>
            </div>
          </Alert>
        </div>

        <div>
          <Markdown className="text-white " rehypePlugins={[rehypeHighlight]}>
            {markdown}
          </Markdown>
        </div>
      </div>
    </>
  );
}
