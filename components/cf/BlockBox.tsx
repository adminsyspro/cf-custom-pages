"use client";

import { Icon } from "@/components/ui/icon";
import { blockPageTranslations } from "@/config/i18n";
import type { BlockPageConfig } from "@/config/routes";
import { CFCard } from "./ui/CFCard";
import { CFCardWrap } from "./ui/CFCardWrapper";
import { NetworkStatusBox } from "./ui/NetworkStatusBox";
import { NetworkStatusWrapper } from "./ui/NetworkStatusWrapper";

export const BlockBox = ({
  type,
  code,
  icon,
  networkStatus,
}: BlockPageConfig) => {
  const translation = blockPageTranslations[type];

  return (
    <CFCardWrap>
      <CFCard
        title={translation.title}
        message={
          <span className="block text-center">{translation.message}</span>
        }
        subtitle="Access denied"
        icon={<Icon name={icon} className="h-6 w-6 text-white" />}
        headerClassName="bg-gradient-to-br from-red-50 to-red-100 p-4"
        scheme="danger"
      >
        <div className="space-y-6">
          {/* Box showing IP + RayID */}
          <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 p-4 border border-red-100">
            <div className="font-mono text-sm">
              <div className="flex items-center gap-2 text-red-700">
                <span className="font-semibold">Your IP:</span>
                <code>::CLIENT_IP::</code>
              </div>

              {type === "waf" && (
                <div className="flex items-center gap-2 text-red-700 mt-2">
                  <span className="font-semibold">Ray ID:</span>
                  <code>::RAY_ID::</code>
                </div>
              )}
            </div>
          </div>

          {/* Network Status */}
          <NetworkStatusWrapper>
            <NetworkStatusBox {...networkStatus} />
          </NetworkStatusWrapper>

          {/* Cloudflare logo footer */}
          <div className="pt-4 border-t border-gray-200 flex items-center justify-center">
            <img
              src="https://cf-custom-pages-wrc3ctrrq-manus-projects-9830b5be.vercel.app/cloudflare-logo.png"
              alt="Cloudflare"
              className="h-6 opacity-80 select-none pointer-events-none"
            />
          </div>
        </div>
      </CFCard>
    </CFCardWrap>
  );
};

export default BlockBox;
