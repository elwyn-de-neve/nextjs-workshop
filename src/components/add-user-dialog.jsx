import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/date-picker";

export function DialogButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 gap-1" size="sm">
          <UserPlus className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add User
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Add a new user to your database.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 mt-2">
          <div className="grid flex-1 gap-y-4 gap-4 items-start">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="username">
                Username
              </Label>
              <Input id="username" placeholder="" required />
            </div>
            <div className="flex flex-row gap-4">
              <div className="grid flex-1 gap-2">
                <Label className="text-sm" htmlFor="fistname">
                  Firstname
                </Label>
                <Input id="firstname" placeholder="" required />
              </div>
              <div className="grid  flex-1 gap-2">
                <Label className="text-sm" htmlFor="lastname">
                  Lastname
                </Label>
                <Input id="genre" placeholder="" required />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="grid flex-1 gap-2">
                <Label className="text-sm" htmlFor="status">
                  Role
                </Label>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid  flex-1 gap-2">
                <Label className="text-sm" htmlFor="date-picker">
                  Registration Date
                </Label>
                <DatePicker />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="default">
              Add User
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PlusCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
