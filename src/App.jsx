import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  Award,
  BookOpen,
  CalendarDays,
  ChartColumn,
  CheckSquare,
  CircleUserRound,
  Clock3,
  Dumbbell,
  Flame,
  Home,
  LayoutDashboard,
  ListChecks,
  Medal,
  MessageSquare,
  Search,
  Settings,
  Swords,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Planner', path: '/planner', icon: ListChecks },
  { label: 'Calendar', path: '/calendar', icon: CalendarDays },
  { label: 'Habits', path: '/habits', icon: CheckSquare },
  { label: 'Analytics', path: '/analytics', icon: ChartColumn },
  { label: 'Challenges', path: '/challenges', icon: Swords },
  { label: 'Friends', path: '/friends', icon: Users },
  { label: 'Notes', path: '/notes', icon: MessageSquare },
  { label: 'Achievements', path: '/achievements', icon: Medal },
  { label: 'Settings', path: '/settings', icon: Settings },
]

const statCards = [
  { label: 'XP', value: '2,480', icon: Zap },
  { label: 'Current Streak', value: '🔥 15 Days', icon: Flame },
  { label: 'Productivity Score', value: '86%', icon: Trophy },
  { label: 'Time Focused', value: '5h 20m', icon: Clock3 },
]

const weeklyProgress = [
  { day: 'Mon', focus: 3, complete: 62 },
  { day: 'Tue', focus: 4, complete: 70 },
  { day: 'Wed', focus: 5, complete: 74 },
  { day: 'Thu', focus: 4, complete: 68 },
  { day: 'Fri', focus: 6, complete: 84 },
  { day: 'Sat', focus: 5, complete: 80 },
  { day: 'Sun', focus: 3, complete: 64 },
]

const monthlyCompletion = [
  { week: 'W1', tasks: 32 },
  { week: 'W2', tasks: 41 },
  { week: 'W3', tasks: 38 },
  { week: 'W4', tasks: 45 },
]

const focusSplit = [
  { name: 'Study', value: 40 },
  { name: 'Coding', value: 30 },
  { name: 'Exercise', value: 15 },
  { name: 'Reading', value: 15 },
]

const todayTasks = [
  { time: '07:00', title: 'Wake up', priority: 'High', category: 'Health' },
  { time: '07:30', title: 'Workout', priority: 'High', category: 'Exercise' },
  { time: '09:00', title: 'React Learning', priority: 'Medium', category: 'Study' },
  { time: '11:00', title: 'DSA Practice', priority: 'High', category: 'Coding' },
  { time: '21:00', title: 'Reading', priority: 'Low', category: 'Reading' },
]

const chartColors = ['#D97706', '#F59E0B', '#FBBF24', '#FCD34D']

function ShellPage({ title, subtitle, children }) {
  return (
    <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm md:p-6">
      <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-100 to-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Good Morning, Sarthak 👋</h1>
        <p className="mt-1 text-sm text-slate-600">
          Stay consistent today. You are 85% ahead of last week.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon }) => (
          <article key={label} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-amber-700">
              <Icon size={16} />
              {label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-800">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm xl:col-span-2">
          <h2 className="text-lg font-semibold text-slate-800">Today&apos;s Tasks</h2>
          <ul className="mt-3 space-y-3">
            {todayTasks.map((task) => (
              <li
                key={`${task.time}-${task.title}`}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-50 bg-amber-50/40 px-3 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {task.time} • {task.title}
                  </p>
                  <p className="text-xs text-slate-500">{task.category}</p>
                </div>
                <span className="rounded-full bg-amber-200 px-2 py-1 text-xs font-medium text-amber-900">
                  {task.priority}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Upcoming Task</h2>
          <p className="mt-2 text-sm text-slate-600">DSA starts now</p>
          <p className="mt-3 text-3xl font-semibold text-amber-700">00:10:00</p>
          <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-3 text-xs text-slate-600">
            Challenge Status: 30 Days React • Day 11/30
          </div>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm xl:col-span-2">
          <h2 className="text-lg font-semibold text-slate-800">Weekly Progress</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <LineChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#FED7AA" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="complete" stroke="#D97706" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Focus Breakdown</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={focusSplit} dataKey="value" nameKey="name" outerRadius={95}>
                  {focusSplit.map((entry, index) => (
                    <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Monthly Completion</h2>
          <div className="mt-4 h-56">
            <ResponsiveContainer>
              <BarChart data={monthlyCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#FED7AA" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tasks" fill="#F59E0B" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Achievements</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            <li className="rounded-xl border border-amber-100 p-3">🏆 Complete 100 Tasks (76/100)</li>
            <li className="rounded-xl border border-amber-100 p-3">📚 Study 100 Hours (58/100)</li>
            <li className="rounded-xl border border-amber-100 p-3">💪 Workout 30 Days (18/30)</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

function PlannerPage() {
  return (
    <ShellPage
      title="Daily Planner"
      subtitle="Drag-and-drop friendly timeline with repeat, priority, and category controls."
    >
      <ul className="space-y-3">
        {todayTasks.map((task) => (
          <li key={task.title} className="rounded-xl border border-amber-100 bg-amber-50/40 p-3">
            <p className="font-medium text-slate-700">{task.time} • {task.title}</p>
            <p className="mt-1 text-sm text-slate-500">
              Priority: {task.priority} • Category: {task.category} • Repeat: Daily / Weekly / Monthly
            </p>
          </li>
        ))}
      </ul>
    </ShellPage>
  )
}

function AnalyticsPage() {
  const heatmapRows = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const heatmapCols = ['W1', 'W2', 'W3', 'W4']

  return (
    <ShellPage
      title="Progress Analytics"
      subtitle="Track productivity, focus time, and consistency with weekly and monthly trends."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-100 p-4">
          <h2 className="text-lg font-semibold text-slate-800">Daily Productivity</h2>
          <div className="mt-4 h-56">
            <ResponsiveContainer>
              <LineChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#FED7AA" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="complete" stroke="#D97706" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-2xl border border-amber-100 p-4">
          <h2 className="text-lg font-semibold text-slate-800">Hours by Category</h2>
          <div className="mt-4 h-56">
            <ResponsiveContainer>
              <BarChart data={monthlyCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#FED7AA" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tasks" fill="#F59E0B" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>

      <section className="mt-4 rounded-2xl border border-amber-100 p-4">
        <h2 className="text-lg font-semibold text-slate-800">Productivity Heatmap</h2>
        <div className="mt-3 space-y-2 text-sm">
          {heatmapRows.map((row) => (
            <div key={row} className="flex items-center gap-2">
              <span className="w-10 text-slate-500">{row}</span>
              {heatmapCols.map((col, idx) => (
                <div
                  key={`${row}-${col}`}
                  className="h-7 w-7 rounded-md"
                  style={{ backgroundColor: chartColors[(idx + row.length) % chartColors.length] }}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </ShellPage>
  )
}

function CalendarPage() {
  return (
    <ShellPage
      title="Calendar"
      subtitle="View your monthly, weekly, and daily timelines with upcoming events."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-amber-100 p-4">
          <h2 className="font-semibold text-slate-800">Upcoming Events</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Today • 2:00 PM • Project Build Session</li>
            <li>Tomorrow • 6:00 PM • Gym</li>
            <li>Wed • 9:00 PM • Reading Sprint</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-100 p-4 text-sm text-slate-600">
          Timeline view placeholder for drag-drop calendar scheduling.
        </div>
      </div>
    </ShellPage>
  )
}

function HabitsPage() {
  return (
    <ShellPage
      title="Habit Tracker"
      subtitle="Track daily habits like water, workout, meditation, reading, coding, and journaling."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {['Drink Water', 'Workout', 'Meditation', 'Reading', 'Coding', 'Journal', 'Sleep'].map(
          (habit) => (
            <label
              key={habit}
              className="flex items-center justify-between rounded-xl border border-amber-100 bg-amber-50/40 p-3 text-sm"
            >
              <span>{habit}</span>
              <input type="checkbox" className="h-4 w-4 accent-amber-600" defaultChecked />
            </label>
          ),
        )}
      </div>
    </ShellPage>
  )
}

function ChallengesPage() {
  return (
    <ShellPage
      title="Challenges"
      subtitle="Compete with friends on streak-based challenge rules and live leaderboards."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-amber-100 p-4">
          <h2 className="font-semibold text-slate-800">Active Challenges</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>30 Days React • Day 11</li>
            <li>100 Days Coding • Day 22</li>
            <li>Morning Routine • Day 7</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-amber-100 p-4">
          <h2 className="font-semibold text-slate-800">Leaderboard</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-600">
            <li>1. You • 2,480 XP</li>
            <li>2. Aman • 2,420 XP</li>
            <li>3. Priya • 2,305 XP</li>
          </ol>
        </article>
      </div>
    </ShellPage>
  )
}

function FriendsPage() {
  return (
    <ShellPage
      title="Friends"
      subtitle="Add friends, compare XP, and stay accountable through shared progress."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { name: 'Aman', streak: '🔥 21', xp: '2,420 XP' },
          { name: 'Priya', streak: '🔥 18', xp: '2,305 XP' },
        ].map((friend) => (
          <article key={friend.name} className="rounded-2xl border border-amber-100 p-4">
            <p className="font-semibold text-slate-700">{friend.name}</p>
            <p className="text-sm text-slate-500">{friend.streak}</p>
            <p className="mt-2 text-sm text-amber-700">{friend.xp}</p>
          </article>
        ))}
      </div>
    </ShellPage>
  )
}

function NotesPage() {
  return (
    <ShellPage
      title="Notes"
      subtitle="Capture quick notes, markdown snippets, pinned ideas, and a daily journal."
    >
      <article className="rounded-2xl border border-amber-100 p-4">
        <h2 className="font-semibold text-slate-800">Pinned Note</h2>
        <p className="mt-2 text-sm text-slate-600">
          ## Focus blocks\n- Pomodoro: 25 min coding\n- Review DSA patterns\n- Read system design chapter
        </p>
      </article>
    </ShellPage>
  )
}

function AchievementsPage() {
  return (
    <ShellPage
      title="Achievements"
      subtitle="Unlock badges by building consistency in tasks, learning, and healthy routines."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          'Complete 100 Tasks',
          'Study 100 Hours',
          'Workout 30 Days',
          'Read 20 Books',
          'Wake Up Before 6 AM',
          'Complete 50 DSA Questions',
        ].map((achievement) => (
          <article key={achievement} className="rounded-xl border border-amber-100 bg-amber-50/40 p-4 text-sm">
            <Award className="mb-2 text-amber-700" size={18} />
            {achievement}
          </article>
        ))}
      </div>
    </ShellPage>
  )
}

function SettingsPage() {
  return (
    <ShellPage
      title="Settings"
      subtitle="Customize theme, notifications, language, timezone, and privacy controls."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="rounded-xl border border-amber-100 p-3 text-sm text-slate-600">
          Theme
          <select className="mt-2 w-full rounded-lg border border-amber-200 px-3 py-2 outline-none">
            <option>Warm</option>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </label>
        <label className="rounded-xl border border-amber-100 p-3 text-sm text-slate-600">
          Timezone
          <select className="mt-2 w-full rounded-lg border border-amber-200 px-3 py-2 outline-none">
            <option>Asia/Kolkata</option>
            <option>UTC</option>
          </select>
        </label>
      </div>
    </ShellPage>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-slate-700">
      <div className="mx-auto flex max-w-[1400px] gap-4 p-3 md:p-4">
        <aside className="hidden w-64 rounded-3xl border border-amber-100 bg-white p-4 shadow-sm lg:block">
          <div className="mb-6 flex items-center gap-3 px-2">
            <span className="grid h-10 w-10 place-content-center rounded-xl bg-amber-500 text-white">
              <Zap size={18} />
            </span>
            <div>
              <p className="text-lg font-semibold text-slate-800">FocusFlow</p>
              <p className="text-xs text-slate-500">Plan • Focus • Grow</p>
            </div>
          </div>
          <nav className="space-y-1">
            {navItems.map(({ label, path, icon: Icon }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={label}
                  to={path}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                    active
                      ? 'bg-amber-500 text-white'
                      : 'text-slate-600 hover:bg-amber-50 hover:text-amber-700'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 space-y-4">
          <header className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-amber-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 rounded-xl border border-amber-200 px-3 py-2 text-sm text-slate-500">
              <Search size={16} />
              <span>Search tasks, habits, challenges...</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <button
                type="button"
                className="rounded-xl border border-amber-100 bg-amber-50 px-3 py-2 text-amber-700"
              >
                Notifications
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-amber-100 px-3 py-2"
              >
                <CircleUserRound size={16} />
                Sarthak
              </button>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/planner" element={<PlannerPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/habits" element={<HabitsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>

          <section className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
              <BookOpen className="mb-2 text-amber-700" size={18} />
              <h3 className="font-semibold text-slate-800">Pomodoro</h3>
              <p className="text-sm text-slate-500">25 / 50 / Custom sessions with focus stats.</p>
            </article>
            <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
              <Dumbbell className="mb-2 text-amber-700" size={18} />
              <h3 className="font-semibold text-slate-800">Habit Momentum</h3>
              <p className="text-sm text-slate-500">Track streak freeze cards and recover consistency.</p>
            </article>
            <article className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
              <Home className="mb-2 text-amber-700" size={18} />
              <h3 className="font-semibold text-slate-800">Warm, focused UI</h3>
              <p className="text-sm text-slate-500">Soft cards, subtle shadows, and calming spacing.</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
