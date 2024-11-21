import CustomersTable from '@/app/ui/customers/table';
import { customers } from '@/app/lib/placeholder-data';

export default function CustomersPage() {
  // Format data agar sesuai dengan tipe Customer
  const Customer = customers.map((customer) => ({
    ...customer,
  }));

  return (
    <div className="p-6">
    
      <CustomersTable customers={Customer} />
    </div>
  );
}