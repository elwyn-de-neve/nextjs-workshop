import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DialogButton } from "@/components/add-user-dialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { DotsThree, FunnelSimple } from "@phosphor-icons/react/dist/ssr";

const users = [
  {
    username: "Dfaxx",
    firstname: "Elwyn",
    lastname: "de Neve",
    status: "user",
    registered: "30-06-1981",
  },
  {
    username: "Nova",
    firstname: "Nova",
    lastname: "Eeken",
    status: "editor",
    registered: "01-01-1990",
  },
  {
    username: "johnsmith",
    firstname: "John",
    lastname: "Smith",
    status: "user",
    registered: "01-01-1990",
  },
  {
    username: "janesmith",
    firstname: "Jane",
    lastname: "Smith",
    status: "editor",
    registered: "01-01-1990",
  },
  {
    username: "johnsmith",
    firstname: "John",
    lastname: "Smith",
    status: "admin",
    registered: "01-01-1990",
  },
];

export default function Home() {
  function userRole(status) {
    switch (status) {
      case "admin":
        return "default";
      case "editor":
        return "secondary";
      case "user":
        return "outline";
      default:
        return "secondary";
    }
  }

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 gap-1" size="sm" variant="outline">
                <FunnelSimple className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>User</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Editor</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Admin</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogButton label="Add User" />
        </div>
      </div>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>
              Manage your Users and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead className="hidden md:table-cell">
                    First Name
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Last Name
                  </TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Registered
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.slice(0, 8).map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="hidden sm:table-cell">
                      <img
                        alt="user image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {user.username}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {user.firstname}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {user.lastname}
                    </TableCell>
                    <TableCell>
                      <Badge variant={userRole(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {user.registered}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <DotsThree weight="bold" className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing
              <strong>1-10</strong> of <strong>32</strong>
              Users
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
