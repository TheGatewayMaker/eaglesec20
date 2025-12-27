import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function GuardsByRegion() {
  const data = [
    { name: "Punjab", guards: 1510 },
    { name: "Sindh", guards: 98 },
    { name: "KPK", guards: 32 },
    { name: "Azad Kashmir", guards: 246 },
    { name: "Federal Capital", guards: 61 },
  ];

  const colors = [
    "#3d8944", // pk-green-main
    "#1e5ba8", // accent blue
    "#4d9d56", // pk-green-light
    "#1a4d2e", // pk-green-dark
    "#2d6b8f", // secondary
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
          <p className="font-black text-sm text-foreground">
            {payload[0].payload.name}
          </p>
          <p className="font-bold text-sm" style={{ color: colors[data.indexOf(payload[0].payload)] }}>
            {payload[0].value} Guards
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-background to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Title with Visual Styling */}
        <div className="mb-12 sm:mb-16 md:mb-24">
          <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6">
            <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Number of Guards by Region
            </h2>
          </div>
          <p className="text-sm md:text-lg font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
            Distribution of our security personnel across Pakistan
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-lg">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#1f2937", fontSize: 12, fontWeight: 700 }}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis
                tick={{ fill: "#1f2937", fontSize: 12, fontWeight: 700 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
              <Bar dataKey="guards" radius={[8, 8, 0, 0]} isAnimationActive={true}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Data Summary */}
          <div className="mt-10 pt-8 border-t border-border">
            <h3 className="text-lg md:text-xl font-black mb-6 text-foreground">
              Regional Breakdown
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-background to-background/80 border border-border rounded-lg p-4 text-center hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-3"
                    style={{ backgroundColor: colors[index] }}
                  ></div>
                  <p className="text-xs md:text-sm font-black text-foreground mb-2">
                    {item.name}
                  </p>
                  <p className="text-lg md:text-2xl font-black" style={{ color: colors[index] }}>
                    {item.guards}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
