/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, RefreshCw, MessageSquare, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ContactMessage } from '../types';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const { t, i18n } = useTranslation();
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Local inbox records (saved in localStorage for persistence)
  const [localMessages, setLocalMessages] = useState<ContactMessage[]>([]);

  // Load local messages from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('anhtu_portfolio_enquiries');
      if (saved) {
        setLocalMessages(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed reading dynamic local messages:', e);
    }
  }, []);

  const saveMessage = (msg: ContactMessage) => {
    const updated = [msg, ...localMessages];
    setLocalMessages(updated);
    try {
      localStorage.setItem('anhtu_portfolio_enquiries', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed writing enquiries:', e);
    }
  };

  const deleteMessage = (id: string) => {
    const filtered = localMessages.filter(m => m.id !== id);
    setLocalMessages(filtered);
    try {
      localStorage.setItem('anhtu_portfolio_enquiries', JSON.stringify(filtered));
    } catch (e) {
      console.error('Failed deleting enquiry:', e);
    }
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setFormSuccess(false);

    setTimeout(() => {
      const newMsg: ContactMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString(i18n.language === 'vi' ? 'vi-VN' : 'en-US', {
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        })
      };

      saveMessage(newMsg);
      setIsSending(false);
      setFormSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 border-t transition-colors duration-200 bg-primary border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left information list */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">{t('contact.subtitle')}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-strong">{t('contact.title')}</h2>
              <div className="w-12 h-1 rounded mt-3 bg-accent"></div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-secondary">
              Bạn có ý tưởng dự án hoặc cần nâng cấp hiệu năng ứng dụng React hiện tại? Hãy liên hệ ngay để cùng xây dựng giải pháp vượt trội.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors badge-info">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-secondary">{t('contact.info.email')}</p>
                  <p className="font-semibold text-sm text-strong">khiennd98@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors bg-secondary text-secondary border-secondary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-secondary">{t('contact.info.phone')}</p>
                  <p className="font-semibold text-sm text-strong">+84 (0) 98 123 3521</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors bg-secondary text-secondary border-secondary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-secondary">{t('contact.info.location')}</p>
                  <p className="font-semibold text-sm text-strong">{t('contact.info.locationValue')}</p>
                </div>
              </div>
            </div>

            {/* Social Channels links */}
            <div className="pt-6 border-t border-secondary flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg border flex items-center justify-center transition-colors bg-secondary text-secondary border-secondary hover:bg-accent hover:text-strong cursor-pointer" title="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg border flex items-center justify-center transition-colors bg-secondary text-secondary border-secondary hover:bg-accent hover:text-strong cursor-pointer" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Interactive Send Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel border rounded-xl p-6 sm:p-8 transition-colors bg-secondary border-primary">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-secondary">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="input-field w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-secondary">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="a@example.com"
                      className="input-field w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wide text-secondary">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ý tưởng dự án, thắc mắc chi tiết..."
                    className="input-field w-full rounded-lg p-4 text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Message states feedback banner */}
                <AnimatePresence>
                  {formSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 border rounded-lg text-xs flex items-center gap-2 transition-colors alert-success"
                    >
                      <CheckCircle size={14} />
                      <span>{t('contact.form.success')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer text-xs uppercase btn-primary"
                >
                  {isSending ? (
                    <>
                      <RefreshCw size={14} className="animate-spin" />
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Real-time Stored Enquiries Inbox Simulator */}
            <div className="rounded-xl border p-6 transition-colors bg-secondary border-primary">
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-primary">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-accent" />
                  <h4 className="font-extrabold text-sm text-strong">{t('contact.inbox.title')}</h4>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold transition-colors badge-info">
                  {localMessages.length} {t('contact.inbox.count')}
                </span>
              </div>

              {localMessages.length === 0 ? (
                <p className="text-xs italic text-center py-4 text-muted">{t('contact.inbox.empty')}</p>
              ) : (
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {localMessages.map((msg) => (
                    <div key={msg.id} className="p-3 rounded-lg border flex justify-between items-start text-xs group transition-colors bg-tertiary border-primary">
                      <div className="space-y-1 max-w-[85%]">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-strong">{msg.name}</span>
                          <span className="text-[10px] text-secondary">&lt;{msg.email}&gt;</span>
                          <span className="text-[9px] font-mono text-muted">{msg.timestamp}</span>
                        </div>
                        <p className="line-clamp-2 italic text-secondary">&ldquo;{msg.message}&rdquo;</p>
                      </div>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 cursor-pointer text-secondary hover:text-red-400"
                        title="Hủy tin nhắn"
                      >
                        <X size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
