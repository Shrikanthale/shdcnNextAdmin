import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { cn } from "@/lib/utils"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "unpaid":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }
  
  export default function TableDemo() {
    return (
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableCaption className="text-sm text-muted-foreground">A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[100px] font-semibold">Invoice</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Method</TableHead>
              <TableHead className="text-right font-semibold">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow 
                key={invoice.invoice}
                className="transition-colors hover:bg-muted/50 [&:not(:last-child)]:border-b"
              >
                <TableCell className="font-medium py-4">{invoice.invoice}</TableCell>
                <TableCell className="py-4">
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    getStatusColor(invoice.paymentStatus)
                  )}>
                    {invoice.paymentStatus}
                  </span>
                </TableCell>
                <TableCell className="py-4">{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right font-medium py-4">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-muted/50">
              <TableCell colSpan={3} className="font-semibold py-4">Total</TableCell>
              <TableCell className="text-right font-semibold py-4">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  }
  