import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PieChartIcon from '@mui/icons-material/PieChart';

import './StatsBannerSection.css';

const stats = [
  { label: 'Licensed States', value: '6+', icon: AccountBalanceIcon },
  { label: 'Companies', value: '30+', icon: PieChartIcon },
  { label: 'Happy Clients', value: '1,100+', icon: FavoriteBorderIcon },
  { label: 'Saved', value: '100,000+', icon: AttachMoneyIcon },
];

export function StatsBannerSection() {
  return (
    <section className="linwood-stats-banner" aria-label="Agency highlights">
      <div className="linwood-stats-banner__inner">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="linwood-stats-banner__item" key={stat.label}>
              <Icon aria-hidden="true" />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
