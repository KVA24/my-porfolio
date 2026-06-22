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
    <section id="contact" className="py-20 px-4 sm:px-8 bg-[#0c1015] border-t border-[#21262d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left information list */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{t('contact.subtitle')}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">{t('contact.title')}</h2>
              <div className="w-12 h-1 bg-cyan-500 rounded mt-3"></div>
            </div>

            <p className="text-[#8b949e] text-sm leading-relaxed max-w-sm">
              Bạn có ý tưởng dự án hoặc cần nâng cấp hiệu năng ứng dụng React hiện tại? Hãy liên hệ ngay để cùng xây dựng giải pháp vượt trội.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b949e] uppercase font-bold tracking-wider">{t('contact.info.email')}</p>
                  <p className="text-white font-semibold text-sm">khiennd98@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#1f2937] text-slate-300 border border-[#30363d] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b949e] uppercase font-bold tracking-wider">{t('contact.info.phone')}</p>
                  <p className="text-white font-semibold text-sm">+84 (0) 98 123 3521</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#1f2937] text-slate-300 border border-[#30363d] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b949e] uppercase font-bold tracking-wider">{t('contact.info.location')}</p>
                  <p className="text-white font-semibold text-sm">{t('contact.info.locationValue')}</p>
                </div>
              </div>
            </div>

            {/* Social Channels links */}
            <div className="pt-6 border-t border-[#21262d]/50 flex items-center gap-3">
              <a href="#" className="h-10 w-10 rounded-lg bg-[#161b22] hover:bg-[#21262d] text-[#8b949e] hover:text-white border border-[#30363d] flex items-center justify-center transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-[#161b22] hover:bg-[#21262d] text-[#8b949e] hover:text-white border border-[#30363d] flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Interactive Send Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel border border-[#30363d] rounded-xl p-6 sm:p-8 bg-[#161b22]/30">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 focus-within:text-cyan-400">
                    <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wide">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 focus-within:text-cyan-400">
                    <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wide">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="a@example.com"
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-2.5 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 focus-within:text-cyan-400">
                  <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wide">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ý tưởng dự án, thắc mắc chi tiết..."
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-white text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Message states feedback banner */}
                <AnimatePresence>
                  {formSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs flex items-center gap-2"
                    >
                      <CheckCircle size={14} />
                      <span>{t('contact.form.success')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-900 font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer text-xs uppercase"
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
            <div className="rounded-xl border border-[#21262d] bg-[#161b22]/40 p-6">
              <div className="flex justify-between items-center border-b border-[#21262d] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-cyan-400" />
                  <h4 className="text-white font-extrabold text-sm">{t('contact.inbox.title')}</h4>
                </div>
                <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800/30 px-2 py-0.5 rounded font-mono font-bold">
                  {localMessages.length} {t('contact.inbox.count')}
                </span>
              </div>

              {localMessages.length === 0 ? (
                <p className="text-xs text-[#8b949e] italic text-center py-4">{t('contact.inbox.empty')}</p>
              ) : (
                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {localMessages.map((msg) => (
                    <div key={msg.id} className="p-3 rounded-lg bg-[#0d1117] border border-[#21262d] flex justify-between items-start text-xs group">
                      <div className="space-y-1 max-w-[85%]">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{msg.name}</span>
                          <span className="text-[#8b949e] text-[10px]">&lt;{msg.email}&gt;</span>
                          <span className="text-[9px] font-mono text-[#444c56]">{msg.timestamp}</span>
                        </div>
                        <p className="text-[#8b949e] line-clamp-2 italic">&ldquo;{msg.message}&rdquo;</p>
                      </div>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-[#8b949e] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity p-1 cursor-pointer"
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
