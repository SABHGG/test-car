/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Qp8NwYjkF8N
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"

export function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Carwash Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6" />
                  <div className="text-xl font-bold">Schedule</div>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline">Today</Button>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="font-semibold">10:00 AM</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Car Wash</div>
                      </div>
                      <Button size="icon" variant="outline">
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="font-semibold">12:00 PM</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Car Wash</div>
                      </div>
                      <Button size="icon" variant="outline">
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="font-semibold">2:00 PM</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Car Wash</div>
                      </div>
                      <Button size="icon" variant="outline">
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <DollarSignIcon className="w-6 h-6" />
                  <div className="text-xl font-bold">Revenue</div>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline">Today</Button>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="font-semibold">10:00 AM</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Car Wash</div>
                      </div>
                      <Button size="icon" variant="outline">
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="font-semibold">12:00 PM</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Car Wash</div>
                      </div>
                      <Button size="icon" variant="outline">
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="font-semibold">2:00 PM</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Car Wash</div>
                      </div>
                      <Button size="icon" variant="outline">
                        <ChevronRightIcon className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="flex flex-col">
                <CardTitle>Performance</CardTitle>
                <CardDescription>Monthly Performance</CardDescription>
              </div>
              <div className="md:ml-auto">
                <Button variant="outline">Export</Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CurvedlineChart className="w-full aspect-[1/2]" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart className="w-full aspect-[1/2]" />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Net Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CurvedlineChart className="w-full aspect-[1/2]" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Gross Margin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart className="w-full aspect-[1/2]" />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="flex flex-col">
                <CardTitle>Appointments</CardTitle>
                <CardDescription>Upcoming Appointments</CardDescription>
              </div>
              <div className="md:ml-auto">
                <Button variant="outline">Add Appointment</Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Today</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Sedan</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">10:00 AM</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tomorrow</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">Alice Smith</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">SUV</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">2:00 PM</div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Today</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Sedan</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">10:00 AM</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tomorrow</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">Alice Smith</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">SUV</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">2:00 PM</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="flex flex-col">
                <CardTitle>Feedback</CardTitle>
                <CardDescription>Customer Reviews</CardDescription>
              </div>
              <div className="md:ml-auto">
                <Button variant="outline">Add Review</Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Card>
                <CardContent className="flex items-center gap-4">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Great Service</div>
                  </div>
                  <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">10:00 AM</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold">Alice Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Quick and Efficient</div>
                  </div>
                  <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">2:00 PM</div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function LineChartIcon(props) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
