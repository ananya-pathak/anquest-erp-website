// Modules component
const Modules = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Sales</h3>
            <p className="text-gray-600">Manage sales orders and invoices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Purchase</h3>
            <p className="text-gray-600">Handle procurement and suppliers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Accounting</h3>
            <p className="text-gray-600">Comprehensive accounting features.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">HR</h3>
            <p className="text-gray-600">Human resources management.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modules