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
import {
  Calendar as CalendarIcon,
  UserPlus,
} from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export function DialogButton() {
  const today = new Date();
  const [date, setDate] = React.useState(today);

  return (
    <Dialog>
      <form action="">
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
                <Input name="username" id="username" placeholder="" required />
              </div>
              <div className="flex flex-row gap-4">
                <div className="grid flex-1 gap-2">
                  <Label className="text-sm" htmlFor="fistName">
                    First name
                  </Label>
                  <Input name="fistName" id="fistName" required />
                </div>
                <div className="grid  flex-1 gap-2">
                  <Label className="text-sm" htmlFor="lastName">
                    Last name
                  </Label>
                  <Input name="lastName" id="lastName" required />
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
                    <SelectContent name="role">
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
      </form>
    </Dialog>
  );
}
